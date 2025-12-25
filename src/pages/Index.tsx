import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from '@/components/ui/icon';
import { toast } from "sonner";

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

interface Project {
  id: number;
  contractorId: number;
  title: string;
  area: string;
  cost: string;
  duration: string;
  image: string;
}

interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');

  const contractors: Contractor[] = [
    {
      id: 1,
      name: "СтройМастер",
      rating: 4.9,
      reviewsCount: 127,
      experience: "12 лет",
      warranty: "5 лет",
      deadline: "6-8 месяцев",
      price: "от 2.5 млн ₽",
      specialization: ["Каркасные дома", "Дома из бруса"],
      projectsCompleted: 89,
      location: "Москва и МО",
      description: "Профессиональная команда с многолетним опытом строительства экологичных домов"
    },
    {
      id: 2,
      name: "ДомТехнологий",
      rating: 4.8,
      reviewsCount: 94,
      experience: "8 лет",
      warranty: "3 года",
      deadline: "4-6 месяцев",
      price: "от 3 млн ₽",
      specialization: ["Кирпичные дома", "Монолитное строительство"],
      projectsCompleted: 65,
      location: "Санкт-Петербург",
      description: "Современные технологии и качественные материалы для вашего дома"
    },
    {
      id: 3,
      name: "ЭкоСтрой",
      rating: 4.7,
      reviewsCount: 81,
      experience: "10 лет",
      warranty: "5 лет",
      deadline: "5-7 месяцев",
      price: "от 2.8 млн ₽",
      specialization: ["Каркасные дома", "Энергоэффективные дома"],
      projectsCompleted: 72,
      location: "Екатеринбург",
      description: "Экологичное строительство с использованием природных материалов"
    },
    {
      id: 4,
      name: "ПрофиДом",
      rating: 4.9,
      reviewsCount: 156,
      experience: "15 лет",
      warranty: "7 лет",
      deadline: "8-10 месяцев",
      price: "от 4 млн ₽",
      specialization: ["Дома из бруса", "Элитное строительство"],
      projectsCompleted: 112,
      location: "Краснодар",
      description: "Премиальное качество и индивидуальный подход к каждому проекту"
    },
    {
      id: 5,
      name: "БыстроДом",
      rating: 4.6,
      reviewsCount: 73,
      experience: "6 лет",
      warranty: "2 года",
      deadline: "3-4 месяца",
      price: "от 1.8 млн ₽",
      specialization: ["Каркасные дома", "Модульное строительство"],
      projectsCompleted: 58,
      location: "Новосибирск",
      description: "Быстровозводимые дома по доступным ценам"
    },
    {
      id: 6,
      name: "КапиталСтрой",
      rating: 4.8,
      reviewsCount: 103,
      experience: "14 лет",
      warranty: "5 лет",
      deadline: "7-9 месяцев",
      price: "от 3.5 млн ₽",
      specialization: ["Кирпичные дома", "Монолитное строительство"],
      projectsCompleted: 95,
      location: "Казань",
      description: "Капитальное строительство домов на века"
    }
  ];

  const projects: Project[] = [
    { id: 1, contractorId: 1, title: "Каркасный дом 120м²", area: "120 м²", cost: "2.8 млн ₽", duration: "6 месяцев", image: "/placeholder.svg" },
    { id: 2, contractorId: 1, title: "Дом из бруса 150м²", area: "150 м²", cost: "3.5 млн ₽", duration: "8 месяцев", image: "/placeholder.svg" },
    { id: 3, contractorId: 2, title: "Кирпичный дом 200м²", area: "200 м²", cost: "5.2 млн ₽", duration: "10 месяцев", image: "/placeholder.svg" },
    { id: 4, contractorId: 2, title: "Монолитный дом 180м²", area: "180 м²", cost: "4.8 млн ₽", duration: "9 месяцев", image: "/placeholder.svg" },
    { id: 5, contractorId: 3, title: "Энергоэффективный дом 140м²", area: "140 м²", cost: "3.2 млн ₽", duration: "7 месяцев", image: "/placeholder.svg" },
    { id: 6, contractorId: 4, title: "Элитный дом из бруса 250м²", area: "250 м²", cost: "7.5 млн ₽", duration: "12 месяцев", image: "/placeholder.svg" },
  ];

  const articles: Article[] = [
    { id: 1, title: "Как выбрать надежного подрядчика: 10 критериев", category: "Советы", date: "15.12.2024", readTime: "8 мин", excerpt: "Подробное руководство по выбору строительной компании для вашего проекта" },
    { id: 2, title: "Типы фундаментов для частного дома", category: "Технологии", date: "12.12.2024", readTime: "6 мин", excerpt: "Сравнение различных видов фундаментов и их применение" },
    { id: 3, title: "Сроки строительства: что влияет на скорость работ", category: "Планирование", date: "10.12.2024", readTime: "5 мин", excerpt: "Факторы, определяющие продолжительность строительства дома" },
    { id: 4, title: "Гарантии на строительство: на что обратить внимание", category: "Юридические вопросы", date: "08.12.2024", readTime: "7 мин", excerpt: "Разбираемся в гарантийных обязательствах застройщиков" },
  ];

  const filteredContractors = contractors.filter(contractor => {
    const matchesSearch = contractor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         contractor.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialization = selectedSpecialization === 'all' || 
                                  contractor.specialization.some(s => s.includes(selectedSpecialization));
    return matchesSearch && matchesSpecialization;
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Заявка отправлена! Подрядчик свяжется с вами в ближайшее время.");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Building2" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-foreground">ДомПоиск</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors font-medium">Каталог</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors font-medium">Портфолио</a>
              <a href="#articles" className="text-foreground hover:text-primary transition-colors font-medium">Статьи</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
            </nav>
            <Button className="hidden md:inline-flex">Разместить компанию</Button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Найдите надежного подрядчика для строительства дома
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Сравните компании по рейтингу, ценам, гарантиям и срокам. Все проверенные застройщики в одном месте.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Найти подрядчика..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
                    <SelectTrigger className="w-full md:w-64 h-12">
                      <SelectValue placeholder="Специализация" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все специализации</SelectItem>
                      <SelectItem value="Каркасные">Каркасные дома</SelectItem>
                      <SelectItem value="Кирпичные">Кирпичные дома</SelectItem>
                      <SelectItem value="Дома из бруса">Дома из бруса</SelectItem>
                      <SelectItem value="Монолитное">Монолитное строительство</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="h-12 px-8">
                    <Icon name="Search" className="mr-2" size={20} />
                    Найти
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">350+</div>
              <div className="text-muted-foreground">Подрядчиков</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2500+</div>
              <div className="text-muted-foreground">Проектов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.8</div>
              <div className="text-muted-foreground">Средний рейтинг</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Проверено</div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Каталог подрядчиков</h2>
              <p className="text-muted-foreground">Найдено {filteredContractors.length} компаний</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContractors.map((contractor) => (
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

      <section id="projects" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Портфолио проектов</h2>
            <p className="text-muted-foreground">Завершенные дома наших подрядчиков</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => {
              const contractor = contractors.find(c => c.id === project.contractorId);
              return (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Icon name="Home" size={64} className="text-muted-foreground/20" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <Icon name="Building2" size={14} />
                      {contractor?.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Площадь</div>
                        <div className="font-semibold">{project.area}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Стоимость</div>
                        <div className="font-semibold text-primary">{project.cost}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-muted-foreground">Срок строительства</div>
                        <div className="font-semibold">{project.duration}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

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

      <section id="contact" className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Не можете выбрать подрядчика?</h2>
            <p className="text-muted-foreground mb-8">
              Оставьте заявку, и мы поможем подобрать надежную строительную компанию под ваш проект и бюджет
            </p>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name">Имя</Label>
                      <Input id="contact-name" placeholder="Ваше имя" required />
                    </div>
                    <div>
                      <Label htmlFor="contact-phone">Телефон</Label>
                      <Input id="contact-phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="contact-budget">Бюджет проекта</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите диапазон" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 млн ₽</SelectItem>
                        <SelectItem value="2-4">2-4 млн ₽</SelectItem>
                        <SelectItem value="4-6">4-6 млн ₽</SelectItem>
                        <SelectItem value="6+">Более 6 млн ₽</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Описание проекта</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Расскажите о ваших планах..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" className="mr-2" size={20} />
                    Получить консультацию
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building2" className="text-primary" size={24} />
                <span className="font-bold text-lg">ДомПоиск</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Маркетплейс надежных подрядчиков для строительства частных домов
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Как это работает</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Преимущества</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Подрядчикам</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Разместить компанию</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Правила размещения</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@dompoisk.ru
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 text-center text-sm text-muted-foreground">
            © 2024 ДомПоиск. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
