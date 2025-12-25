import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedSpecialization: string;
  setSelectedSpecialization: (value: string) => void;
}

const HeroSection = ({ searchQuery, setSearchQuery, selectedSpecialization, setSelectedSpecialization }: HeroSectionProps) => {
  return (
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
  );
};

export default HeroSection;
