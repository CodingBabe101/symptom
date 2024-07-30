import { createAsyncThunk } from "@reduxjs/toolkit";
import {GoogleGenerativeAI} from '@google/generative-ai'

const genAI = new GoogleGenerativeAI('AIzaSyD94CdKXLoxcR_u-hb7Y1TR9cHHQ2aMT1c')
export const fetchAIResults = createAsyncThunk(
   'ai/fetchAIResults',
   async  (symptoms, {rejectWithValue}) => {
       const model = genAI.getGenerativeModel({model: 'gemini-pro'})
       const prompt = `Using the following symptoms: ${symptoms.join(', ')}, Please provide possible medical conditions and recommendations`

       try {
           const result = await model.generateContent(prompt)
           const response = await result.response
           const conditions = await response.text()

           const cleanedConditions = conditions
           .split('\n')
           .map(condition => condition.trim().replace(/^\*\s*/, ''))
           .filter(condition => condition.length > 0)
           .slice(0, 3)

           return cleanedConditions
       }catch(error){
           console.error("Error generating content:", error)
           return rejectWithValue(error.message)
       }
   }
)