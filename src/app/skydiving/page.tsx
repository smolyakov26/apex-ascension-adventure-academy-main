"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Users, Camera, Gift, Shield, Heart } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function SkydivingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <Image
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070"
          alt="Парашютный спорт"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Испытайте Максимальный Адреналин
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Прыгните с высоты 14 000 футов и ощутите невероятные ощущения свободного падения
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90 text-white font-bold text-lg px-8 py-6"
          >
            <Link href="/skydiving/pricing">Забронировать Прыжок Сейчас</Link>
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Раскройте Своего Внутреннего Авантюриста
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Будь это ваш первый прыжок или вы работаете над получением лицензии парашютиста, 
              Apex Ascension предлагает незабываемые впечатления с высочайшими стандартами безопасности. 
              Наши опытные инструкторы имеют тысячи прыжков за плечами и с страстью 
              делятся невероятным ощущением свободного падения с вами.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-action-orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-[var(--color-action-orange)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                100% Рекорд Безопасности
              </h3>
              <p className="text-gray-600">
                Современное оборудование и строгие протоколы безопасности
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-sky-blue)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[var(--color-sky-blue)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Опытные Инструкторы
              </h3>
              <p className="text-gray-600">
                Сертифицированные USPA профессионалы с 1000+ прыжков каждый
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-action-orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-[var(--color-action-orange)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Незабываемые Воспоминания
              </h3>
              <p className="text-gray-600">
                Доступны профессиональные фото и видео пакеты
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jump Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Выберите Свое Приключение
            </h2>
            <p className="text-lg text-gray-600">
              Выберите опыт, который подходит именно вам
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Tandem Jump */}
            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1512626120412-faf41adb4874?q=80&w=2070"
                    alt="Тандемный Прыжок"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-[var(--color-action-orange)]/10 rounded-full flex items-center justify-center mb-4">
                    <Rocket className="h-6 w-6 text-[var(--color-action-orange)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Тандемный Прыжок
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Идеально для новичков! Прыгайте пристегнутым к опытному инструктору. 
                    Опыт не требуется – просто приходите готовыми к приключению всей жизни.
                  </p>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    <li>✓ 60 секунд свободного падения с 14 000 футов</li>
                    <li>✓ 5-7 минут полета под парашютом</li>
                    <li>✓ Краткое 20-минутное обучение на земле</li>
                    <li>✓ Все оборудование предоставляется</li>
                  </ul>
                  <Button asChild className="w-full bg-[var(--color-navy)] hover:bg-[var(--color-navy)]/90">
                    <Link href="/skydiving/tandem">Узнать Больше</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AFF Training */}
            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1538674021-a3c1c6ca0dc1?q=80&w=2070"
                    alt="Обучение AFF"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-[var(--color-sky-blue)]/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-[var(--color-sky-blue)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Обучение AFF
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Программа Accelerated Freefall для тех, кто хочет стать лицензированным парашютистом. 
                    Прыгайте самостоятельно с первого дня с двумя инструкторами рядом.
                  </p>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    <li>✓ 8-уровневая комплексная программа</li>
                    <li>✓ Обучение на земле включено</li>
                    <li>✓ Прогрессируйте в своем темпе</li>
                    <li>✓ Получите лицензию USPA A-License</li>
                  </ul>
                  <Button asChild className="w-full bg-[var(--color-navy)] hover:bg-[var(--color-navy)]/90">
                    <Link href="/skydiving/aff">Узнать Больше</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Дополнительные Услуги
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-t-4 border-[var(--color-action-orange)]">
              <CardContent className="p-8">
                <Camera className="h-10 w-10 text-[var(--color-action-orange)] mb-4" />
                <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Фото и Видео Пакеты
                </h3>
                <p className="text-gray-600 mb-4">
                  Запечатлейте каждый момент вашего прыжка с профессиональной фото- и видеосъемкой. 
                  Получите потрясающие фотографии и HD видео всего вашего опыта.
                </p>
                <p className="font-semibold text-[var(--color-navy)]">От $149</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-[var(--color-sky-blue)]">
              <CardContent className="p-8">
                <Gift className="h-10 w-10 text-[var(--color-sky-blue)] mb-4" />
                <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Подарочные Сертификаты
                </h3>
                <p className="text-gray-600 mb-4">
                  Подарите приключение! Идеально для дней рождений, выпускных или любого особого случая. 
                  Действительны 12 месяцев с гибким бронированием.
                </p>
                <Button asChild variant="outline" className="border-[var(--color-sky-blue)] text-[var(--color-sky-blue)] hover:bg-[var(--color-sky-blue)] hover:text-white">
                  <Link href="/skydiving/pricing">Купить Подарочный Сертификат</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-sky-blue)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Готовы Сделать Шаг?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Забронируйте свой прыжок сегодня и испытайте адреналин всей жизни
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90 text-white font-bold text-lg px-8 py-6"
          >
            <Link href="/skydiving/pricing">Посмотреть Цены и Забронировать</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}