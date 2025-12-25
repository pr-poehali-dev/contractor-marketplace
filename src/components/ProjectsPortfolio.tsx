import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

interface Project {
  id: number;
  contractorId: number;
  title: string;
  area: string;
  cost: string;
  duration: string;
  image: string;
}

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

interface ProjectsPortfolioProps {
  projects: Project[];
  contractors: Contractor[];
}

const ProjectsPortfolio = ({ projects, contractors }: ProjectsPortfolioProps) => {
  return (
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
  );
};

export default ProjectsPortfolio;
