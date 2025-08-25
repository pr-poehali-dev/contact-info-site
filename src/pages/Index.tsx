import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Icon from "@/components/ui/icon"

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-inter font-bold text-2xl text-gray-900">
              Компания
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="font-open-sans text-gray-600 hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="font-open-sans text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="font-open-sans text-gray-600 hover:text-primary transition-colors">О нас</a>
              <a href="#contact" className="font-open-sans text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-90"></div>
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <h1 className="font-inter font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
            Инновационные
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
              Решения
            </span>
          </h1>
          <p className="font-open-sans text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Предоставляем современные услуги с индивидуальным подходом к каждому клиенту
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg">
              <a href="#contact">Связаться с нами</a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <Icon name="ChevronDown" size={32} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-inter font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              Наши Услуги
            </h2>
            <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексные решения для развития вашего бизнеса с использованием передовых технологий
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Zap",
                title: "Быстрая разработка",
                description: "Создаем решения в кратчайшие сроки без ущерба качеству"
              },
              {
                icon: "Shield",
                title: "Надежность",
                description: "Гарантируем стабильность и безопасность всех наших продуктов"
              },
              {
                icon: "Users",
                title: "Поддержка 24/7",
                description: "Круглосуточная техническая поддержка и консультации"
              },
              {
                icon: "Rocket",
                title: "Инновации",
                description: "Используем новейшие технологии для достижения ваших целей"
              },
              {
                icon: "Target",
                title: "Персонализация",
                description: "Индивидуальный подход к каждому проекту и клиенту"
              },
              {
                icon: "Award",
                title: "Качество",
                description: "Высочайшие стандарты качества на всех этапах работы"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-gray-100 animate-scale-in">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon name={service.icon as any} size={32} className="text-primary group-hover:text-white" />
                  </div>
                  <CardTitle className="font-inter text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-open-sans text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-inter font-bold text-4xl md:text-5xl text-gray-900 mb-6">
                О нашей компании
              </h2>
              <p className="font-open-sans text-xl text-gray-600 mb-6 leading-relaxed">
                Мы — команда профессионалов, которая создает инновационные решения для бизнеса. 
                Наш опыт и стремление к совершенству позволяют нам реализовывать проекты любой сложности.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { number: "100+", label: "Проектов" },
                  { number: "50+", label: "Клиентов" },
                  { number: "5+", label: "Лет опыта" },
                  { number: "24/7", label: "Поддержка" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="font-inter font-bold text-3xl text-primary mb-2">{stat.number}</div>
                    <div className="font-open-sans text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3">
                Узнать подробнее
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </div>
            <div className="animate-scale-in">
              <Card className="bg-gradient-to-br from-primary to-secondary p-8 text-white">
                <CardHeader className="pb-4">
                  <CardTitle className="font-inter text-2xl">Наша миссия</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-open-sans text-lg leading-relaxed opacity-95">
                    Делать сложные технологии простыми и доступными, помогая нашим клиентам 
                    достигать новых высот в их бизнесе через инновационные цифровые решения.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-inter font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              Свяжитесь с нами
            </h2>
            <p className="font-open-sans text-xl text-gray-600 max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Мы всегда на связи и готовы помочь
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-scale-in">
              <Card className="bg-white shadow-lg border-0 h-full">
                <CardHeader>
                  <CardTitle className="font-inter text-2xl text-gray-900 mb-4">Отправить сообщение</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-open-sans text-sm font-medium text-gray-700 mb-2 block">Имя</label>
                      <Input placeholder="Ваше имя" className="border-gray-200 focus:border-primary" />
                    </div>
                    <div>
                      <label className="font-open-sans text-sm font-medium text-gray-700 mb-2 block">Email</label>
                      <Input type="email" placeholder="your@email.com" className="border-gray-200 focus:border-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="font-open-sans text-sm font-medium text-gray-700 mb-2 block">Тема</label>
                    <Input placeholder="Тема сообщения" className="border-gray-200 focus:border-primary" />
                  </div>
                  <div>
                    <label className="font-open-sans text-sm font-medium text-gray-700 mb-2 block">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте..." 
                      rows={5}
                      className="border-gray-200 focus:border-primary resize-none"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="animate-fade-in">
              <div className="space-y-8">
                {[
                  {
                    icon: "Mail",
                    title: "Email",
                    content: "info@company.ru",
                    description: "Ответим в течение 24 часов"
                  },
                  {
                    icon: "Phone",
                    title: "Телефон",
                    content: "+7 (999) 123-45-67",
                    description: "Звоните с 9:00 до 18:00"
                  },
                  {
                    icon: "MapPin",
                    title: "Офис",
                    content: "Москва, ул. Примерная, 123",
                    description: "Приезжайте на консультацию"
                  },
                  {
                    icon: "Clock",
                    title: "Режим работы",
                    content: "Пн-Пт 9:00-18:00",
                    description: "Выходные: Сб-Вс"
                  }
                ].map((contact, index) => (
                  <Card key={index} className="bg-white hover:shadow-md transition-shadow border-gray-100">
                    <CardContent className="flex items-start space-x-4 pt-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={contact.icon as any} size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-inter font-semibold text-lg text-gray-900 mb-1">{contact.title}</h3>
                        <p className="font-open-sans font-medium text-gray-900 mb-1">{contact.content}</p>
                        <p className="font-open-sans text-sm text-gray-600">{contact.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="font-inter font-bold text-2xl mb-4">Компания</div>
              <p className="font-open-sans text-gray-400 leading-relaxed">
                Инновационные решения для современного бизнеса. 
                Мы делаем технологии доступными и эффективными.
              </p>
            </div>
            <div>
              <h4 className="font-inter font-semibold text-lg mb-4">Услуги</h4>
              <ul className="font-open-sans text-gray-400 space-y-2">
                <li>Веб-разработка</li>
                <li>Мобильные приложения</li>
                <li>Консультации</li>
                <li>Техническая поддержка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-inter font-semibold text-lg mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                {["Github", "Linkedin", "Twitter", "Instagram"].map((social, index) => (
                  <div key={index} className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary transition-colors flex items-center justify-center cursor-pointer">
                    <Icon name={social as any} size={18} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="font-open-sans text-gray-400">
              © 2024 Компания. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index