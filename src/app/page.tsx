"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plane, Rocket, GraduationCap, Star, Shield, Users, Award } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Преодолейте гравитацию. Покорите небо.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Испытайте непревзойденный адреналин скайдайвинга или начните свой путь к получению лицензии пилота
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90 text-white font-bold text-lg px-8 py-6"
            >
              <Link href="/skydiving">Забронировать прыжок</Link>
            </Button>
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[var(--color-navy)] font-bold text-lg px-8 py-6"
            >
              <Link href="/pilot-school">Начать обучение полётам</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[var(--color-navy)] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-action-orange)] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                10,000+
              </div>
              <div className="text-sm md:text-base text-gray-300">Успешных прыжков</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-action-orange)] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                500+
              </div>
              <div className="text-sm md:text-base text-gray-300">Обученных пилотов</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-action-orange)] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                100%
              </div>
              <div className="text-sm md:text-base text-gray-300">Рекорд безопасности</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-action-orange)] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                15+
              </div>
              <div className="text-sm md:text-base text-gray-300">Лет опыта</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Наши услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ищете ли вы выброс адреналина или профессиональную карьеру в авиации, у нас есть идеальная программа для вас
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tandem Skydiving */}
            <Card className="hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[var(--color-action-orange)]">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[var(--color-action-orange)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="h-8 w-8 text-[var(--color-action-orange)]" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Тандемный прыжок с парашютом
                </h3>
                <p className="text-gray-600 mb-6">
                  Ваш первый вкус полёта. Опыт не требуется. Прыгайте с высоты 14 000 футов с нашими опытными инструкторами.
                </p>
                <Button asChild className="bg-[var(--color-navy)] hover:bg-[var(--color-navy)]/90">
                  <Link href="/skydiving/tandem">Узнать больше</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pilot Licenses */}
            <Card className="hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[var(--color-sky-blue)]">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[var(--color-sky-blue)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Plane className="h-8 w-8 text-[var(--color-sky-blue)]" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Лицензии пилота (PPL)
                </h3>
                <p className="text-gray-600 mb-6">
                  Начните свой путь в кабину пилота. Сертифицированные FAA программы обучения от частной до коммерческой лицензии.
                </p>
                <Button asChild className="bg-[var(--color-navy)] hover:bg-[var(--color-navy)]/90">
                  <Link href="/pilot-school/courses">Изучить курсы</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Accelerated Courses */}
            <Card className="hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[var(--color-action-orange)]">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[var(--color-action-orange)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="h-8 w-8 text-[var(--color-action-orange)]" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Ускоренные курсы
                </h3>
                <p className="text-gray-600 mb-6">
                  Ускорьте свою авиационную карьеру. Интенсивные программы обучения, разработанные для быстрого получения сертификата.
                </p>
                <Button asChild className="bg-[var(--color-navy)] hover:bg-[var(--color-navy)]/90">
                  <Link href="/pilot-school/courses">Начать</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Доверие и сертификация
            </h2>
            <p className="text-lg text-gray-600">
              Ваша безопасность и успех — наши главные приоритеты
            </p>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center items-center gap-12 mb-16 py-8">
            <div className="flex items-center gap-3">
              <Shield className="h-12 w-12 text-[var(--color-navy)]" />
              <span className="text-xl font-semibold text-gray-700">Сертифицировано FAA</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="h-12 w-12 text-[var(--color-navy)]" />
              <span className="text-xl font-semibold text-gray-700">Член USPA</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-12 w-12 text-[var(--color-navy)]" />
              <span className="text-xl font-semibold text-gray-700">Опытные инструкторы</span>
            </div>
          </div>

          {/* Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[var(--color-action-orange)] text-[var(--color-action-orange)]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Лучший опыт в моей жизни! Инструкторы были профессиональными и заставили меня чувствовать себя в полной безопасности. Не могу дождаться, чтобы сделать это снова!"
                </p>
                <p className="font-semibold text-[var(--color-navy)]">- Сара М.</p>
                <p className="text-sm text-gray-500">Тандемный прыжок</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[var(--color-action-orange)] text-[var(--color-action-orange)]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Отличная лётная школа! Получил свою PPL всего за 4 месяца. Инструкторы знающие, а самолёты в отличном состоянии."
                </p>
                <p className="font-semibold text-[var(--color-navy)]">- Джеймс Т.</p>
                <p className="text-sm text-gray-500">Лицензия частного пилота</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[var(--color-action-orange)] text-[var(--color-action-orange)]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Первоклассное заведение с потрясающим персоналом. Ознакомительный полёт убедил меня получить лицензию пилота. Настоятельно рекомендую!"
                </p>
                <p className="font-semibold text-[var(--color-navy)]">- Майкл Р.</p>
                <p className="text-sm text-gray-500">Студент-пилот</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-sky-blue)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Готовы взлететь?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам довольных клиентов, которые испытали острые ощущения полёта с Apex Ascension
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90 text-white font-bold text-lg px-8 py-6"
            >
              <Link href="/contact">Начать сегодня</Link>
            </Button>
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="bg-white text-[var(--color-navy)] hover:bg-gray-100 font-bold text-lg px-8 py-6 border-white"
            >
              <Link href="/about">Узнать больше о нас</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}