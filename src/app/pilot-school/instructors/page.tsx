"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, Award, BookOpen, Users } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function InstructorsPage() {
  const instructors = [
    {
      name: "Александр Петров",
      title: "Главный Инструктор",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070",
      ratings: ["Инструктор Параплана", "Инструктор Мотопараплана", "PPL-UL"],
      hours: "3,000+",
      experience: "Бывший пилот авиации с 15-летним опытом. Специализируется на обучении полетам на сверхлегких воздушных судах.",
      specialties: ["Параплан", "Мотопараплан", "Сверхлегкие Самолеты"]
    },
    {
      name: "Екатерина Смирнова",
      title: "Старший Инструктор",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076",
      ratings: ["Инструктор Параплана", "PPL-UL"],
      hours: "2,500+",
      experience: "Страстно увлечена обучением и помогает студентам достигать их авиационных мечтаний. Известна терпеливым, тщательным инструктажем.",
      specialties: ["Параплан", "Наземная Подготовка", "Первые Полеты"]
    },
    {
      name: "Дмитрий Иванов",
      title: "Инструктор Мотопараплана",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
      ratings: ["Инструктор Мотопараплана", "PPL-UL"],
      hours: "1,800+",
      experience: "Бывший военный пилот, привносящий точность и дисциплину в обучение полетам. Отлично работает с нервными студентами-новичками.",
      specialties: ["Мотопараплан", "Безопасность Полета", "Маршрутные Полеты"]
    },
    {
      name: "Анна Козлова",
      title: "Инструктор Параплана",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070",
      ratings: ["Инструктор Параплана"],
      hours: "1,200+",
      experience: "Недавний выпускник коммерческой программы, который любит преподавать основы. Хорошо находит общий язык с новыми студентами.",
      specialties: ["Параплан", "Парящие Полеты", "Наземная Подготовка"]
    },
    {
      name: "Сергей  Николаев",
      title: "Специалист по Сверхлегким Самолетам",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070",
      ratings: ["Инструктор PPL-UL", "Пилот Сверхлегких Судов"],
      hours: "2,200+",
      experience: "Эксперт по сверхлегким самолетам с обширным опытом. Готовит студентов к самостоятельным полетам.",
      specialties: ["Сверхлегкие Самолеты", "PPL-UL", "Инструкторская Подготовка"]
    },
    {
      name: "Доктор Мария Орлова",
      title: "Инструктор Теоретической Подготовки",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2076",
      ratings: ["Преподаватель Авиации", "Специалист по Безопасности"],
      hours: "800+",
      experience: "Кандидат технических наук. Делает сложные концепции легкими для понимания. Отличная успеваемость на экзаменах.",
      specialties: ["Теоретическая Подготовка", "Подготовка к Экзаменам", "Авиационная Теория"]
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-sky-blue)] text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Наши Инструкторы
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Опытные, сертифицированные профессионалы, посвященные вашему успеху
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Обучение Мирового Класса
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Наша команда сертифицированных инструкторов приносит тысячи совокупных часов полета 
                и разнообразный авиационный опыт. От бывших пилотов до спортсменов-парапланеристов, 
                каждый инструктор страстно увлечен авиацией и стремится помочь вам достичь ваших целей безопасно и эффективно.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-[var(--color-sky-blue)] mx-auto mb-3" />
                  <p className="text-3xl font-bold text-[var(--color-navy)] mb-1">8+</p>
                  <p className="text-gray-600">Сертифицированных Инструкторов</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Plane className="h-12 w-12 text-[var(--color-action-orange)] mx-auto mb-3" />
                  <p className="text-3xl font-bold text-[var(--color-navy)] mb-1">11,500+</p>
                  <p className="text-gray-600">Совокупных Часов Полета</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-[var(--color-sky-blue)] mx-auto mb-3" />
                  <p className="text-3xl font-bold text-[var(--color-navy)] mb-1">95%</p>
                  <p className="text-gray-600">Успешной Сдачи с Первой Попытки</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-[var(--color-action-orange)] mx-auto mb-3" />
                  <p className="text-3xl font-bold text-[var(--color-navy)] mb-1">300+</p>
                  <p className="text-gray-600">Обученных Студентов</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Instructor Profiles */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="space-y-8 max-w-6xl mx-auto">
              {instructors.map((instructor, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      {/* Photo */}
                      <div className="relative h-64 md:h-auto">
                        <Image
                          src={instructor.image}
                          alt={instructor.name}
                          fill
                          className="object-cover md:rounded-l-lg"
                        />
                      </div>
                      
                      {/* Info */}
                      <div className="md:col-span-2 p-8">
                        <div className="flex flex-wrap items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                              {instructor.name}
                            </h3>
                            <p className="text-lg text-[var(--color-sky-blue)] font-semibold mb-3">{instructor.title}</p>
                          </div>
                          <div className="flex gap-2 flex-wrap">
                            {instructor.ratings.map((rating, i) => (
                              <Badge key={i} className="bg-[var(--color-action-orange)]">
                                {rating}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <span className="inline-flex items-center gap-2 text-gray-700 font-semibold">
                            <Plane className="h-5 w-5 text-[var(--color-sky-blue)]" />
                            {instructor.hours} Часов Полета
                          </span>
                        </div>

                        <p className="text-gray-700 mb-4">
                          {instructor.experience}
                        </p>

                        <div>
                          <p className="font-semibold text-[var(--color-navy)] mb-2">Специализация:</p>
                          <div className="flex flex-wrap gap-2">
                            {instructor.specialties.map((specialty, i) => (
                              <Badge key={i} variant="outline" className="text-[var(--color-sky-blue)] border-[var(--color-sky-blue)]">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Наша Философия Обучения
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-l-4 border-[var(--color-sky-blue)]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3">Безопасность Превыше Всего</h3>
                    <p className="text-gray-700">
                      Безопасность - наш главный приоритет на каждом занятии. Мы прививаем безопасные практики с первого дня, 
                      которые будут служить вам на протяжении всей вашей авиационной карьеры.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[var(--color-action-orange)]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3">Индивидуальный Подход</h3>
                    <p className="text-gray-700">
                      Каждый студент учится по-разному. Мы адаптируем наши методы обучения к вашему стилю 
                      обучения и темпу, гарантируя, что вы получите максимум от каждого занятия.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[var(--color-action-orange)]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3">Практические Навыки</h3>
                    <p className="text-gray-700">
                      Мы не просто учим вас сдавать тесты – мы готовим вас к реальным сценариям полета 
                      и принятию решений, с которыми вы столкнетесь как пилот.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[var(--color-sky-blue)]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3">Постоянная Поддержка</h3>
                    <p className="text-gray-700">
                      Наши отношения не заканчиваются после получения сертификата. Мы здесь, чтобы поддерживать ваше 
                      дальнейшее авиационное путешествие с повторным обучением и наставничеством.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-sky-blue)] text-white border-none">
              <CardContent className="p-12 text-center">
                <Award className="h-16 w-16 mx-auto mb-6" />
                <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Хотите Присоединиться к Нашей Команде?
                </h2>
                <p className="text-xl mb-8">
                  Мы всегда ищем страстных, квалифицированных инструкторов для присоединения к нашей команде. 
                  Конкурентная оплата, отличная рабочая среда и возможности профессионального развития.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors">
                    Посмотреть Вакансии
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}