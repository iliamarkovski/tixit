import { Button, buttonVariants } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { cn } from '@/lib/cn';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AddPage = () => {
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_GENERATIVE_AI_API_KEY);
  const [response, setResponse] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);

    const name = formData.get('name') as string;
    const age = formData.get('age') as string;
    const country = formData.get('country') as string;
    const hobbies = formData.get('hobbies') as string;
    const lang = formData.get('lang') as string;

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const prompt = `Imagine you are a mother with a ${age}-year-old child named ${name} in ${country}. Your child's favorite things are ${hobbies}. As a caring mother, you tell a wonderful bedtime story to your child every night. Create a bedtime story based on the child's favorite things, country, and age. At the end of the story, give some advice for kids to be good and do good for society, and motivate them to believe in themselves. The language of the fairytale should be in ${lang}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;

    setResponse(response.text());
    setLoading(false);
  };

  return (
    <div className="flex w-full flex-col gap-6">
      <Link to="/" className={cn(buttonVariants({ variant: 'outline' }), 'self-start')}>
        <ArrowLeft />
        Back to home
      </Link>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Fairytale generator</CardTitle>
          <CardDescription>Enter information bellow to generate fairytale</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={fetchData}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" name="name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" name="age" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" type="text" name="country" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="hobbies">Hobbies</Label>
                <Input id="hobbies" type="text" name="hobbies" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lang">Language</Label>
                <Input id="lang" type="text" name="lang" required />
              </div>

              <Button type="submit" className="w-full" isLoading={loading} disabled={loading}>
                Generate fairytale
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {response ? <p>{response}</p> : null}
    </div>
  );
};
export { AddPage };
