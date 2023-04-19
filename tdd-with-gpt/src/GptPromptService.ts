import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class GptPromptService {
  private readonly instance: AxiosInstance;

  constructor() {
    const axiosConfig: AxiosRequestConfig = {
      baseURL: 'https://api.openai.com/v1',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    };
    this.instance = axios.create(axiosConfig);
  }

  async callChatGPT(prompt: string): Promise<AxiosResponse<any>> {
    const data = {
      prompt,
      max_tokens: 1,
      temperature: 0.5,
      n: 1,
      stop: '\n'
    };
    return await this.instance.post('/engines/davinci-codex/completions', data);
  }
}
