import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

export default function Index() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const services = [
    {
      icon: 'Users',
      title: 'Частный прием',
      description: 'Индивидуальные консультации в комфортной обстановке',
      price: 'от 3000 ₽'
    },
    {
      icon: 'Video',
      title: 'Онлайн консультации',
      description: 'Психологическая помощь в удобном формате',
      price: 'от 2500 ₽'
    },
    {
      icon: 'BookOpen',
      title: 'Курсы и программы',
      description: 'Комплексные программы личностного развития',
      price: 'от 5000 ₽'
    },
    {
      icon: 'Calendar',
      title: 'Семинары',
      description: 'Групповые занятия по специальным темам',
      price: 'от 1500 ₽'
    }
  ]

  const directions = [
    {
      title: 'Гипнотерапия',
      description: 'Работа с подсознанием для решения глубинных проблем',
      tags: ['Избавление от фобий', 'Работа с зависимостями', 'Улучшение сна']
    },
    {
      title: 'Психосоматика',
      description: 'Изучение связи между психикой и телесными проявлениями',
      tags: ['Снижение стресса', 'Работа с болями', 'Гармонизация состояния']
    },
    {
      title: 'Аутотренинги',
      description: 'Техники самовнушения и релаксации',
      tags: ['Снятие напряжения', 'Повышение концентрации', 'Эмоциональный баланс']
    },
    {
      title: 'Автопрограммирование',
      description: 'Изменение установок и паттернов мышления',
      tags: ['Достижение целей', 'Повышение мотивации', 'Личностный рост']
    },
    {
      title: 'Медитативные практики',
      description: 'Техники осознанности и внутреннего покоя',
      tags: ['Майндфулнесс', 'Стрессоустойчивость', 'Духовное развитие']
    },
    {
      title: 'Арт-терапия',
      description: 'Творческие методы работы с эмоциями',
      tags: ['Самовыражение', 'Работа с травмой', 'Креативность']
    }
  ]

  const courses = [
    {
      title: 'Основы саморегуляции',
      duration: '8 недель',
      format: 'Онлайн + практика',
      price: '15 000 ₽',
      description: 'Комплексная программа обучения техникам управления эмоциональным состоянием'
    },
    {
      title: 'Мастер гипноза',
      duration: '12 недель',
      format: 'Очно + супервизия',
      price: '45 000 ₽',
      description: 'Профессиональная подготовка специалистов по гипнотерапии'
    },
    {
      title: 'Психосоматический подход',
      duration: '6 недель',
      format: 'Смешанный',
      price: '22 000 ₽',
      description: 'Изучение взаимосвязи психики и тела в терапевтической практике'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-cream-50 to-sage-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-warm-50/90 backdrop-blur-md border-b border-warm-200 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-warm-800 text-3xl">MindCare</h1>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'services', label: 'Услуги' },
                { id: 'directions', label: 'Направления' },
                { id: 'courses', label: 'Курсы' },
                { id: 'about', label: 'Обо мне' },
                { id: 'contacts', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'text-warm-700 font-medium' 
                      : 'text-warm-600 hover:text-warm-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-100/20 via-cream-100/30 to-sage-100/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl cozy-glow">
                <img 
                  src="/img/df92b824-2e19-42cb-bb4f-44c7eca5514f.jpg" 
                  alt="Уютный кабинет психолога" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-warm-800 mb-6 animate-fade-in">
              🌿 Место безопасности и понимания
            </h2>
            <p className="text-xl text-warm-700 mb-8 leading-relaxed">
              Создаю теплую атмосферу доверия, где каждый может найти поддержку и путь к внутреннему спокойствию. 
              Здесь вас ждет бережное отношение и профессиональная помощь.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-warm-600 hover:bg-warm-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection('contacts')}
              >
                Записаться на консультацию
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-warm-300 text-warm-700 hover:bg-warm-100 px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => scrollToSection('services')}
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-cream-50/70">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-warm-800 mb-4">Услуги</h2>
            <p className="text-xl text-warm-700 max-w-2xl mx-auto">
              Комплексный подход к решению психологических задач
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-warm-200 hover:scale-105 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-warm-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                    <Icon name={service.icon} className="w-8 h-8 text-warm-600" />
                  </div>
                  <CardTitle className="text-warm-800">{service.title}</CardTitle>
                  <Badge className="bg-sage-200 text-sage-800 hover:bg-sage-200">{service.price}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-warm-700">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section id="directions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-warm-800 mb-4">Направления работы</h2>
            <p className="text-xl text-warm-700 max-w-2xl mx-auto">
              Специализированные методы для решения различных задач
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directions.map((direction, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-warm-200">
                <CardHeader>
                  <CardTitle className="text-warm-800">{direction.title}</CardTitle>
                  <CardDescription>{direction.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {direction.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-warm-100 text-warm-700 hover:bg-warm-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-cream-50/70">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-warm-800 mb-4">Курсы и программы</h2>
            <p className="text-xl text-warm-700 max-w-2xl mx-auto">
              Обучающие программы для специалистов и личностного развития
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-warm-200">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-warm-800">{course.title}</CardTitle>
                    <Badge className="bg-warm-600 text-white hover:bg-warm-600">{course.price}</Badge>
                  </div>
                  <div className="flex gap-2 mb-2">
                    <Badge variant="outline" className="border-sage-300 text-sage-700">
                      <Icon name="Clock" className="w-3 h-3 mr-1" />
                      {course.duration}
                    </Badge>
                    <Badge variant="outline" className="border-sage-300 text-sage-700">
                      <Icon name="Monitor" className="w-3 h-3 mr-1" />
                      {course.format}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{course.description}</CardDescription>
                  <Button className="w-full mt-4 bg-warm-600 hover:bg-warm-700 shadow-md hover:shadow-lg transition-all duration-300">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-warm-800 mb-6">Обо мне</h2>
              <div className="space-y-4 text-warm-700 text-lg">
                <p>
                  Меня зовут [Имя], и я практикующий психолог с более чем 10-летним опытом работы. 
                  Специализируюсь на современных методах психотерапии, включая гипнотерапию и психосоматический подход.
                </p>
                <p>
                  Мой подход основан на интеграции различных психологических школ и техник, 
                  что позволяет найти индивидуальное решение для каждого клиента.
                </p>
                <div className="pt-4">
                  <h3 className="font-semibold text-warm-800 mb-2">Образование и сертификации:</h3>
                  <ul className="space-y-2">
                    <li>• Московский государственный университет, факультет психологии</li>
                    <li>• Международный институт гипнотерапии</li>
                    <li>• Сертификат по психосоматической медицине</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:order-first">
              <div className="relative">
                <div className="w-full h-96 rounded-3xl overflow-hidden">
                  <img 
                    src="/img/6b4cda7a-6b1b-4f7f-9222-ee031e215d26.jpg" 
                    alt="Психолог" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-warm-300 rounded-full opacity-40"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-sage-300 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-cream-50/70">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-warm-800 mb-4">Контакты</h2>
            <p className="text-xl text-warm-700 max-w-2xl mx-auto">
              Свяжитесь со мной для записи на консультацию
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-warm-100 rounded-full flex items-center justify-center">
                  <Icon name="Phone" className="w-6 h-6 text-warm-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-warm-800">Телефон</h3>
                  <p className="text-warm-700">+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-warm-100 rounded-full flex items-center justify-center">
                  <Icon name="Mail" className="w-6 h-6 text-warm-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-warm-800">Email</h3>
                  <p className="text-warm-700">info@psycholog.ru</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-warm-100 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" className="w-6 h-6 text-warm-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-warm-800">Адрес</h3>
                  <p className="text-warm-700">г. Москва, ул. Примерная, д. 1</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-warm-100 rounded-full flex items-center justify-center">
                  <Icon name="Clock" className="w-6 h-6 text-warm-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-warm-800">Время работы</h3>
                  <p className="text-warm-700">Пн-Пт: 10:00-20:00<br />Сб: 11:00-17:00</p>
                </div>
              </div>
            </div>
            
            <Card className="border-warm-200 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-warm-800">Записаться на консультацию</CardTitle>
                <CardDescription>Заполните форму и я свяжусь с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-warm-800 mb-1">Имя</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-warm-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-500"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-warm-800 mb-1">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-warm-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-500"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-warm-800 mb-1">Сообщение</label>
                  <textarea 
                    rows={4}
                    className="w-full p-3 border border-warm-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-500"
                    placeholder="Опишите ваш запрос"
                  />
                </div>
                <Button className="w-full bg-warm-600 hover:bg-warm-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Психологический центр</h3>
          <p className="text-warm-200 mb-6">
            Профессиональная помощь для вашего психологического благополучия
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="text-lavender-200 hover:text-white hover:bg-lavender-700">
              <Icon name="Phone" className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-lavender-200 hover:text-white hover:bg-lavender-700">
              <Icon name="Mail" className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-lavender-200 hover:text-white hover:bg-lavender-700">
              <Icon name="MessageCircle" className="w-5 h-5" />
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-warm-700 text-warm-300">
            <p>&copy; 2024 Психологический центр. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}