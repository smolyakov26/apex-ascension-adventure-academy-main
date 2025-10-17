"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plane, GraduationCap, Award, Clock, DollarSign, Users } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function PilotSchoolPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <Image
          src="https://images.unsplash.com/photo-1436262513933-a0b06755c784?q=80&w=2071"
          alt="Обучение Пилотированию"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Школа Пилотирования
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Получите лицензию пилота сверхлегких воздушных судов (PPL-UL)
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90 text-white font-bold text-lg px-8 py-6"
          >
            <Link href="/pilot-school/discovery-flight">Записаться на Пробный Полет</Link>
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Осуществите Мечту о Полете
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Хотите ли вы заниматься авиацией профессионально или как хобби, Apex Ascension Flight School 
              предоставляет обучение мирового класса с опытными инструкторами, современными сверхлегкими 
              воздушными судами и гибким графиком. Мы помогли более 500 студентам получить свои крылья 
              и готовы помочь вам тоже.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-sky-blue)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[var(--color-sky-blue)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Сертифицировано
              </h3>
              <p className="text-gray-600">
                Лицензированная школа пилотирования с отличной репутацией
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-action-orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[var(--color-action-orange)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Опытные Инструкторы
              </h3>
              <p className="text-gray-600">
                Сертифицированные инструкторы с тысячами часов опыта
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-sky-blue)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8 text-[var(--color-sky-blue)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Сверхлегкий Флот
              </h3>
              <p className="text-gray-600">
                Современные парапланы, мотопарапланы и легкие самолеты
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Наши Программы Обучения
            </h2>
            <p className="text-lg text-gray-600">
              От первого полета до продвинутых рейтингов, мы предлагаем полные решения для обучения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Private Pilot License - Ultralight */}
            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2071"
                    alt="Лицензия Пилота Сверхлегких Судов"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-[var(--color-sky-blue)]/10 rounded-full flex items-center justify-center mb-4">
                    <Plane className="h-6 w-6 text-[var(--color-sky-blue)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    PPL-UL (Сверхлегкие Судна)
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Ваш путь в небо. Научитесь управлять сверхлегкими воздушными судами и перевозить пассажиров.
                  </p>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    <li>✓ 42 часа летной подготовки</li>
                    <li>✓ Теоретическая подготовка и экзамен</li>
                    <li>✓ Самостоятельные и маршрутные полеты</li>
                    <li>✓ 2-4 месяца типичного завершения</li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">Стоимость от</span>
                    <span className="text-2xl font-bold text-[var(--color-navy)]">250 000 ₽</span>
                  </div>
                  <Button asChild className="w-full bg-[var(--color-navy)] hover:bg-[var(--color-navy)]/90">
                    <Link href="/pilot-school/courses">Узнать Больше</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Paramotor Training */}
            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1583829366803-50c481e7f732?q=80&w=2070"
                    alt="Обучение Мотопарапланеризму"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-[var(--color-action-orange)]/10 rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-[var(--color-action-orange)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Мотопараплан
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Самый доступный способ летать. Обучение полетам на мотопараплане с двигателем.
                  </p>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    <li>✓ 15-20 часов практики</li>
                    <li>✓ Теория и безопасность</li>
                    <li>✓ Старты и посадки</li>
                    <li>✓ 2-3 недели обучения</li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">Стоимость от</span>
                    <span className="text-2xl font-bold text-[var(--color-navy)]">120 000 ₽</span>
                  </div>
                  <Button asChild className="w-full bg-[var(--color-navy)] hover:bg-[var(--color-navy)]/90">
                    <Link href="/pilot-school/courses">Узнать Больше</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Paragliding */}
            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070"
                    alt="Обучение Парапланеризму"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-[var(--color-sky-blue)]/10 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-[var(--color-sky-blue)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Параплан
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Научитесь летать как птица. Парящие полеты на параплане с использованием восходящих потоков.
                  </p>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    <li>✓ 10-15 часов наземной подготовки</li>
                    <li>✓ Теория метеорологии</li>
                    <li>✓ Парящие полеты</li>
                    <li>✓ 1-2 месяца обучения</li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">Стоимость от</span>
                    <span className="text-2xl font-bold text-[var(--color-navy)]">80 000 ₽</span>
                  </div>
                  <Button asChild className="w-full bg-[var(--color-navy)] hover:bg-[var(--color-navy)]/90">
                    <Link href="/pilot-school/courses">Узнать Больше</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Ratings */}
            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1569629743817-70d8db6c323b?q=80&w=2069"
                    alt="Продвинутые Рейтинги"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-[var(--color-action-orange)]/10 rounded-full flex items-center justify-center mb-4">
                    <Plane className="h-6 w-6 text-[var(--color-action-orange)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Продвинутые Рейтинги
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Расширьте свои возможности. Инструкторские рейтинги и специализации.
                  </p>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    <li>✓ Инструктор параплана</li>
                    <li>✓ Инструктор мотопараплана</li>
                    <li>✓ Полеты по приборам (по желанию)</li>
                    <li>✓ Ночные полеты</li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">Стоимость от</span>
                    <span className="text-2xl font-bold text-[var(--color-navy)]">60 000 ₽</span>
                  </div>
                  <Button asChild className="w-full bg-[var(--color-navy)] hover:bg-[var(--color-navy)]/90">
                    <Link href="/pilot-school/courses">Узнать Больше</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Discovery Flight CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-sky-blue)] text-white border-none">
              <CardContent className="p-12 text-center">
                <Plane className="h-16 w-16 mx-auto mb-6" />
                <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Не Уверены, Подходит Ли Вам Полет?
                </h2>
                <p className="text-xl mb-8">
                  Запишитесь на пробный полет! Ощутите радость пилотирования сверхлегкого воздушного судна с одним из наших сертифицированных инструкторов всего за 5 000 рублей.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">30 Минут Полета</p>
                      <p className="text-sm text-white/80">Практический опыт пилотирования</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Инструктаж</p>
                      <p className="text-sm text-white/80">Профессиональное руководство</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Засчитывается в Лицензию</p>
                      <p className="text-sm text-white/80">Если решите продолжить обучение</p>
                    </div>
                  </div>
                </div>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90 text-white font-bold text-lg px-8 py-6"
                >
                  <Link href="/pilot-school/discovery-flight">Записаться на Пробный Полет - 5 000 ₽</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-8">
                <Plane className="h-12 w-12 text-[var(--color-sky-blue)] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Наш Флот
                </h3>
                <p className="text-gray-600 mb-4">
                  Современные, хорошо обслуживаемые сверхлегкие воздушные суда включая парапланы, мотопарапланы и легкие самолеты.
                </p>
                <Button asChild variant="outline" className="border-[var(--color-sky-blue)] text-[var(--color-sky-blue)] hover:bg-[var(--color-sky-blue)] hover:text-white">
                  <Link href="/pilot-school/fleet">Посмотреть Флот</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-[var(--color-action-orange)] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Наши Инструкторы
                </h3>
                <p className="text-gray-600 mb-4">
                  Познакомьтесь с нашей командой страстных, опытных инструкторов, посвященных вашему успеху и безопасности.
                </p>
                <Button asChild variant="outline" className="border-[var(--color-action-orange)] text-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)] hover:text-white">
                  <Link href="/pilot-school/instructors">Познакомиться с Командой</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <DollarSign className="h-12 w-12 text-[var(--color-sky-blue)] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Варианты Оплаты
                </h3>
                <p className="text-gray-600 mb-4">
                  Гибкие планы оплаты и финансирование доступны, чтобы сделать вашу авиационную мечту доступной.
                </p>
                <Button asChild variant="outline" className="border-[var(--color-sky-blue)] text-[var(--color-sky-blue)] hover:bg-[var(--color-sky-blue)] hover:text-white">
                  <Link href="/pilot-school/courses#financing">Узнать Больше</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-sky-blue)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Готовы Начать Свое Авиационное Путешествие?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня, чтобы обсудить ваши цели и создать индивидуальный план обучения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90 text-white font-bold text-lg px-8 py-6"
            >
              <Link href="/contact">Начать</Link>
            </Button>
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="bg-white text-[var(--color-navy)] hover:bg-gray-100 font-bold text-lg px-8 py-6 border-white"
            >
              <Link href="/pilot-school/courses">Посмотреть Все Курсы</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}