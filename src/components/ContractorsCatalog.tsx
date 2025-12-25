import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';

interface Contractor {
  id: number;
  name: string;
  rating: number;
  reviewsCount: number;
  experience: string;
  warranty: string;
  deadline: string;
  price: string;
  specialization: string[];
  projectsCompleted: number;
  location: string;
  description: string;
}

interface ContractorsCatalogProps {
  contractors: Contractor[];
  handleContactSubmit: (e: React.FormEvent) => void;
}

const ContractorsCatalog = ({ contractors, handleContactSubmit }: ContractorsCatalogProps) => {
  return (
    <section id="catalog" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Каталог подрядчиков</h2>
            <p className="text-muted-foreground">Найдено {contractors.length} компаний</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contractors.map((contractor) => (
            <Card key={contractor.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <CardTitle className="text-xl mb-1">{contractor.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <Icon name="MapPin" size={14} />
                      {contractor.location}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded">
                    <Icon name="Star" size={16} className="text-primary fill-primary" />
                    <span className="font-semibold text-primary">{contractor.rating}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {contractor.specialization.map((spec, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{contractor.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Award" size={16} />
                      Опыт
                    </span>
                    <span className="font-semibold">{contractor.experience}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="ShieldCheck" size={16} />
                      Гарантия
                    </span>
                    <span className="font-semibold">{contractor.warranty}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      Сроки
                    </span>
                    <span className="font-semibold">{contractor.deadline}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Banknote" size={16} />
                      Стоимость
                    </span>
                    <span className="font-semibold text-primary">{contractor.price}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span>{contractor.projectsCompleted} проектов</span>
                  <span>{contractor.reviewsCount} отзывов</span>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">
                      <Icon name="MessageSquare" className="mr-2" size={18} />
                      Оставить заявку
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Связаться с подрядчиком</DialogTitle>
                      <DialogDescription>
                        {contractor.name} свяжется с вами в течение 24 часов
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Ваше имя</Label>
                        <Input id="name" placeholder="Иван Иванов" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                      </div>
                      <div>
                        <Label htmlFor="message">Сообщение</Label>
                        <Textarea
                          id="message"
                          placeholder="Расскажите о вашем проекте..."
                          rows={4}
                        />
                      </div>
                      <Button type="submit" className="w-full">Отправить заявку</Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContractorsCatalog;
