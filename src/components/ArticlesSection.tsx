import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
}

interface ArticlesSectionProps {
  articles: Article[];
}

const ArticlesSection = ({ articles }: ArticlesSectionProps) => {
  return (
    <section id="articles" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Полезные статьи</h2>
          <p className="text-muted-foreground">Советы и рекомендации по строительству</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{article.category}</Badge>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Icon name="Clock" size={12} />
                    {article.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription>{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="p-0 h-auto font-semibold text-primary">
                  Читать далее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
