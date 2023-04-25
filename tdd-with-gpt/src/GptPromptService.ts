import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';


export class GptPromptService {
  private readonly instance: AxiosInstance;

  constructor() {
    const axiosConfig: AxiosRequestConfig = {
      baseURL: 'https://chatgpt-community.cn/tdd-with-gpt',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    };
    this.instance = axios.create(axiosConfig);
  }

  async callChatGPT(prompt: string): Promise<AxiosResponse<any>> {
    const data = {
      prompt: prompt
    };
    return await this.instance.post('/prompt/', data);
    
  }
}
