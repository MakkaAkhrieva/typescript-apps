enum QuestionStatus {
  Published = "published",
  Draft = "draft",
  Deleted = "deleted",
}

async function getFaqs(req: {
  topecId: number;
  status: QuestionStatus;
}): Promise<
  {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: QuestionStatus;
  }[]
> {
  const res = await fetch("/faqs", {
    method: "POST",
    body: JSON.stringify(req),
  });
  const data: Promise<
    {
      question: string;
      answer: string;
      tags: string[];
      likes: number;
      status: QuestionStatus;
    }[]
  > = await res.json();
  return data;
}
