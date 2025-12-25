import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from '@/components/ui/icon';
import { toast } from "sonner";
import HeroSection from "@/components/HeroSection";
import ContractorsCatalog from "@/components/ContractorsCatalog";
import ProjectsPortfolio from "@/components/ProjectsPortfolio";
import ArticlesSection from "@/components/ArticlesSection";
import ReviewsSection from "@/components/ReviewsSection";
import { contractors, projects, articles, reviews } from "@/data/mockData";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');

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

      <HeroSection 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedSpecialization={selectedSpecialization}
        setSelectedSpecialization={setSelectedSpecialization}
      />

      <ContractorsCatalog 
        contractors={filteredContractors}
        handleContactSubmit={handleContactSubmit}
      />

      <ProjectsPortfolio 
        projects={projects}
        contractors={contractors}
      />

      <ArticlesSection articles={articles} />

      <ReviewsSection reviews={reviews} />

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