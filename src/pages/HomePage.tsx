import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useState } from 'react';

const HomePage = () => {
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_GENERATIVE_AI_API_KEY);
  const [response, setResponse] = useState<string>();

  const fetchData = async () => {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    // const prompt = `Think you are a mom who has ${age} years old ${gender} in ${country}. your child's favourite things are ${hobbies}.You are a caring mother about your
    // children and you have to tell a wonderful story for your child every single night. so generate a bedtime story for the chield bease on child's favourite things, country, age.
    // also end of the story you have to give some advice for kids to be good and do good for the sociaty. Also motivate them to belive themselefs`;
    const prompt = `Test`;
    const result = await model.generateContent(prompt);
    const response = await result.response;

    setResponse(response.text);
  };

  return (
    <Card className="mx-auto max-w-sm" onSubmit={fetchData}>
      <CardHeader>
        <CardTitle className="text-2xl">Fairytale generator</CardTitle>
        <CardDescription>Enter information bellow to generate fairytale</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="age">Age</Label>
            <Input id="age" type="number" required />
          </div>

          <Button type="submit" className="w-full">
            Generate fairytale
          </Button>
        </div>

        {response ? <p>{response}</p> : null}
      </CardContent>
    </Card>
  );
};
export { HomePage };
