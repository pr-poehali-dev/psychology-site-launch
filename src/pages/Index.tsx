import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

export default function Index() {
  const [activeSection, setActiveSection] = useState('home')
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<any>(null)
  const [selectedCertificate, setSelectedCertificate] = useState(0)
  const [paymentModalOpen, setPaymentModalOpen] = useState(false)

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
      price: 'от 3000 ₽',
      image: 'img/31ed6ae8-602e-4962-8156-1e8b9e08f597.jpg'
    },
    {
      icon: 'Video',
      title: 'Онлайн консультации',
      description: 'Психологическая помощь в удобном формате',
      price: 'от 2500 ₽',
      image: 'img/157a933b-7b3a-4041-a8ec-28d38915ff9a.jpg'
    },
    {
      icon: 'BookOpen',
      title: 'Курсы и программы',
      description: 'Комплексные программы личностного развития',
      price: 'от 5000 ₽',
      image: 'img/11a37884-6cfc-49fe-8b0e-4321227c845f.jpg'
    },
    {
      icon: 'Calendar',
      title: 'Семинары',
      description: 'Групповые занятия по специальным темам',
      price: 'от 1500 ₽',
      image: 'img/7120afe1-8777-4c55-8be7-40b693cf1625.jpg'
    }
  ]

  const directions = [
    {
      title: 'Гипнотерапия',
      description: 'Работа с подсознанием для решения глубинных проблем',
      tags: ['Избавление от фобий', 'Работа с зависимостями', 'Улучшение сна'],
      image: 'img/b5ae03af-a105-4fc8-9052-a60cac773650.jpg'
    },
    {
      title: 'Психосоматика',
      description: 'Изучение связи между психикой и телесными проявлениями',
      tags: ['Снижение стресса', 'Работа с болями', 'Гармонизация состояния'],
      image: 'img/1e078643-c07c-4392-a4ed-6d3f8759faeb.jpg'
    },
    {
      title: 'Аутотренинги',
      description: 'Техники самовнушения и релаксации',
      tags: ['Снятие напряжения', 'Повышение концентрации', 'Эмоциональный баланс'],
      image: 'img/c85476d1-3fae-42ec-be6c-f480b451e95c.jpg'
    },
    {
      title: 'Автопрограммирование',
      description: 'Изменение установок и паттернов мышления',
      tags: ['Достижение целей', 'Повышение мотивации', 'Личностный рост'],
      image: 'img/e7503082-d4d2-46e6-a00d-fbefac703b77.jpg'
    },
    {
      title: 'Медитативные практики',
      description: 'Техники осознанности и внутреннего покоя',
      tags: ['Майндфулнесс', 'Стрессоустойчивость', 'Духовное развитие'],
      image: 'img/cde0d741-3c69-4b3c-b65e-09c0dbacaea2.jpg'
    },
    {
      title: 'Арт-терапия',
      description: 'Творческие методы работы с эмоциями',
      tags: ['Самовыражение', 'Работа с травмой', 'Креативность'],
      image: 'img/c46e7fd1-fb05-415b-8f36-3b913c8d5e2e.jpg'
    }
  ]

  const courses = [
    {
      title: 'Основы саморегуляции',
      duration: '8 недель',
      format: 'Онлайн + практика',
      description: 'Комплексная программа обучения техникам управления эмоциональным состоянием',
      programs: [
        'Дыхательные техники и релаксация',
        'Управление стрессом и тревожностью',
        'Эмоциональная саморегуляция',
        'Практики майндфулнесс',
        'Техники быстрого восстановления',
        'Работа с негативными установками'
      ]
    },
    {
      title: 'Мастер гипноза',
      duration: '12 недель',
      format: 'Очно + супервизия',
      description: 'Профессиональная подготовка специалистов по гипнотерапии',
      programs: [
        'Основы гипнотического воздействия',
        'Техники погружения в транс',
        'Работа с фобиями и страхами',
        'Избавление от вредных привычек',
        'Регрессивная терапия',
        'Эриксоновский гипноз',
        'Самогипноз и аутотренинг',
        'Этика и безопасность в гипнотерапии'
      ]
    },
    {
      title: 'Психосоматический подход',
      duration: '6 недель',
      format: 'Смешанный',
      description: 'Изучение взаимосвязи психики и тела в терапевтической практике',
      programs: [
        'Теория психосоматических расстройств',
        'Телесно-ориентированная терапия',
        'Работа с хронической болью',
        'Диагностика психосоматики',
        'Техники снятия мышечных блоков',
        'Интеграция психики и тела'
      ]
    }
  ]

  const certificates = [
    {
      image: 'https://cdn.poehali.dev/files/c70a5034-f511-462a-aaf7-307f9c69a9b2.jpeg',
      title: 'Практикующий психолог',
      description: 'Профессиональная консультационная деятельность'
    },
    {
      image: 'https://cdn.poehali.dev/files/3d196932-ad64-4a91-bb98-add218323370.jpeg',
      title: 'Сертификат профессионального соответствия',
      description: 'Психолог-гипнолог, специалист по психодиагностике'
    },
    {
      image: 'https://cdn.poehali.dev/files/67069846-dd15-4be5-9a1c-47d6c5937bf7.jpeg',
      title: 'Диплом специалиста',
      description: 'Московский социально-гуманитарный институт, психология'
    }
  ]

  const openModal = (course: any) => {
    setSelectedCourse(course)
    setModalOpen(true)
  }

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
              <Button 
                onClick={() => setPaymentModalOpen(true)}
                className="bg-warm-600 hover:bg-warm-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Оплатить
              </Button>
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
                  src="https://cdn.poehali.dev/files/8fec520e-5d2f-4047-b2ac-95664cdc9085.jpeg" 
                  alt="Психологическая сессия" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-warm-800 mb-6 animate-fade-in">Психология онлайн</h2>
            <p className="text-xl text-warm-700 mb-8 leading-relaxed">
              Создаю теплую атмосферу доверия, где каждый может найти поддержку и путь к внутреннему спокойствию. 
              Здесь вас ждет бережное отношение и профессиональная помощь.
            </p>

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
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-warm-200 hover:scale-105 bg-white/80 backdrop-blur-sm overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <Badge className="absolute top-3 right-3 bg-warm-600 text-white hover:bg-warm-600">{service.price}</Badge>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-warm-800">{service.title}</CardTitle>
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
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-warm-200 overflow-hidden">
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={direction.image} 
                    alt={direction.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
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
                  <Button 
                    onClick={() => openModal(course)}
                    className="w-full mt-4 bg-warm-600 hover:bg-warm-700 shadow-md hover:shadow-lg transition-all duration-300"
                  >
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
                <p>Меня зовут Сергей , и я практикующий психолог с более чем 10-летним опытом работы. Специализируюсь на современных методах психотерапии, включая гипнотерапию и психосоматический подход</p>
                <p>
                  Мой подход основан на интеграции различных психологических школ и техник, 
                  что позволяет найти индивидуальное решение для каждого клиента.
                </p>
                <div className="pt-4">
                  <h3 className="font-semibold text-warm-800 mb-2">Образование и сертификации:</h3>
                  <ul className="space-y-2">
                    <li>• Московский социально-гуманитарный институт</li>
                    <li></li>
                    <li>• Сертификат  психолог-гипнолог </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:order-first">
              <div className="space-y-4">
                {/* Основная картинка */}
                <div className="relative">
                  <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl bg-warm-50 flex items-center justify-center">
                    <img 
                      src={certificates[selectedCertificate].image}
                      alt={certificates[selectedCertificate].title}
                      className="max-w-full max-h-full object-contain cursor-pointer"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
                    <h4 className="text-white font-semibold text-sm">{certificates[selectedCertificate].title}</h4>
                    <p className="text-gray-200 text-xs">{certificates[selectedCertificate].description}</p>
                  </div>
                </div>
                
                {/* Миниатюры */}
                <div className="grid grid-cols-3 gap-3">
                  {certificates.map((cert, index) => (
                    <div 
                      key={index}
                      onClick={() => setSelectedCertificate(index)}
                      className={`relative h-20 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 border-2 ${
                        selectedCertificate === index 
                          ? 'ring-2 ring-warm-500 scale-105 border-warm-500' 
                          : 'border-warm-200 hover:scale-102 opacity-80 hover:opacity-100 hover:border-warm-300'
                      }`}
                    >
                      <img 
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                  ))}
                </div>
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
                  <p className="text-warm-700">+7 (902) 477-77-52</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-warm-100 rounded-full flex items-center justify-center">
                  <Icon name="Mail" className="w-6 h-6 text-warm-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-warm-800">Email</h3>
                  <p className="text-warm-700">unix7777@ya.ru</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-warm-100 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" className="w-6 h-6 text-warm-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-warm-800">Адрес</h3>
                  <p className="text-warm-700">г. Сочи  ,  Красноармеская 9Б , оф 6</p>
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
          <h3 className="text-2xl font-bold mb-4">MindCare</h3>
          <p className="text-warm-200 mb-6">
            Профессиональная помощь для вашего психологического благополучия
          </p>

          <div className="mt-8 pt-8 border-t border-warm-700 text-warm-300">
            <p>&copy; 2024 Психологический центр. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {modalOpen && selectedCourse && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-warm-800">{selectedCourse.title}</h3>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setModalOpen(false)}
                  className="text-warm-600 hover:text-warm-800"
                >
                  <Icon name="X" className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="mb-6">
                <div className="flex gap-4 mb-4">
                  <Badge variant="outline" className="border-sage-300 text-sage-700">
                    <Icon name="Clock" className="w-3 h-3 mr-1" />
                    {selectedCourse.duration}
                  </Badge>
                  <Badge variant="outline" className="border-warm-300 text-warm-700">
                    <Icon name="Users" className="w-3 h-3 mr-1" />
                    {selectedCourse.format}
                  </Badge>
                </div>
                <p className="text-warm-700 mb-6">{selectedCourse.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-warm-800 mb-3">Программа курса:</h4>
                <div className="grid gap-2">
                  {selectedCourse.programs?.map((program: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-warm-50 rounded-lg">
                      <div className="w-6 h-6 bg-warm-200 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-xs font-medium text-warm-700">{index + 1}</span>
                      </div>
                      <span className="text-warm-700">{program}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  className="flex-1 bg-warm-600 hover:bg-warm-700"
                  onClick={() => {
                    setModalOpen(false)
                    setPaymentModalOpen(true)
                  }}
                >Оплатить</Button>
                <Button 
                  variant="outline" 
                  onClick={() => setModalOpen(false)}
                  className="border-warm-300 text-warm-700 hover:bg-warm-50"
                >
                  Закрыть
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {paymentModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-warm-800">Оплата услуг</h3>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setPaymentModalOpen(false)}
                  className="text-warm-600 hover:text-warm-800"
                >
                  <Icon name="X" className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="grid gap-3">
                  <Button 
                    className="w-full justify-between p-4 h-auto bg-warm-50 hover:bg-warm-100 text-warm-800 border border-warm-200"
                    variant="outline"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-warm-200 rounded-lg flex items-center justify-center">
                        <Icon name="User" className="w-4 h-4 text-warm-700" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium">Частный прием</div>
                        <div className="text-sm text-warm-600">Индивидуальная консультация</div>
                      </div>
                    </div>
                    <div className="font-bold">3000 ₽</div>
                  </Button>

                  <Button 
                    className="w-full justify-between p-4 h-auto bg-warm-50 hover:bg-warm-100 text-warm-800 border border-warm-200"
                    variant="outline"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-warm-200 rounded-lg flex items-center justify-center">
                        <Icon name="Video" className="w-4 h-4 text-warm-700" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium">Онлайн консультация</div>
                        <div className="text-sm text-warm-600">Видеосвязь</div>
                      </div>
                    </div>
                    <div className="font-bold">2500 ₽</div>
                  </Button>

                  <Button 
                    className="w-full justify-between p-4 h-auto bg-warm-50 hover:bg-warm-100 text-warm-800 border border-warm-200"
                    variant="outline"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-warm-200 rounded-lg flex items-center justify-center">
                        <Icon name="BookOpen" className="w-4 h-4 text-warm-700" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium">Курс обучения</div>
                        <div className="text-sm text-warm-600">Выберите программу</div>
                      </div>
                    </div>
                    <div className="font-bold">от 5000 ₽</div>
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  className="flex-1 bg-warm-600 hover:bg-warm-700"
                  onClick={() => setPaymentModalOpen(false)}
                >
                  Перейти к оплате
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setPaymentModalOpen(false)}
                  className="border-warm-300 text-warm-700 hover:bg-warm-50"
                >
                  Отмена
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}