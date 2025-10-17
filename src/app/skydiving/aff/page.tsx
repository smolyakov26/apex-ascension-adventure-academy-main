"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Users, Target } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function AFFPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-20">
        <Image
          src="https://images.unsplash.com/photo-1538674021-a3c1c6ca0dc1?q=80&w=2070"
          alt="Обучение AFF"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Обучение AFF
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Программа Accelerated Freefall - Получите Лицензию Парашютиста
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Станьте Лицензированным Парашютистом
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Программа Accelerated Freefall (AFF) - это самый быстрый способ стать лицензированным парашютистом. 
              В отличие от тандемных прыжков, вы будете прыгать самостоятельно с самого первого прыжка 
              с двумя инструкторами рядом, давая вам навыки и уверенность для самостоятельных прыжков с парашютом.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Наша комплексная 8-уровневая программа проведет вас от полного новичка до получения 
              лицензии USPA A-License, позволяя вам прыгать в любом месте мира.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-action-orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-[var(--color-action-orange)]" />
              </div>
              <h3 className="font-bold text-[var(--color-navy)] mb-2">Комплексное Обучение</h3>
              <p className="text-sm text-gray-600">Углубленная наземная подготовка по всем аспектам парашютного спорта</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-sky-blue)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[var(--color-sky-blue)]" />
              </div>
              <h3 className="font-bold text-[var(--color-navy)] mb-2">Опытные Инструкторы</h3>
              <p className="text-sm text-gray-600">Два инструктора сопровождают вас на первых прыжках</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-action-orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-[var(--color-action-orange)]" />
              </div>
              <h3 className="font-bold text-[var(--color-navy)] mb-2">Индивидуальный Темп</h3>
              <p className="text-sm text-gray-600">Прогрессируйте через уровни в своем собственном темпе</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-sky-blue)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[var(--color-sky-blue)]" />
              </div>
              <h3 className="font-bold text-[var(--color-navy)] mb-2">Лицензия USPA</h3>
              <p className="text-sm text-gray-600">Получите международно признанную A-License</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Levels */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              8-Уровневая Программа AFF
            </h2>

            <div className="space-y-6">
              {/* Level 1 */}
              <Card className="border-l-4 border-[var(--color-action-orange)]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-action-orange)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Уровень 1: Первый Самостоятельный Прыжок</h3>
                      <p className="text-gray-700">
                        Выход из самолета с двумя инструкторами, поддержание стабильного положения тела, 
                        практика контроля высоты и раскрытие парашюта. Наземная подготовка: 6-8 часов, 
                        охватывающая оборудование, аварийные процедуры и технику свободного падения.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Level 2 */}
              <Card className="border-l-4 border-[var(--color-sky-blue)]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-sky-blue)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Уровень 2: Стабильность и Контроль</h3>
                      <p className="text-gray-700">
                        Развитие навыков Уровня 1, улучшение положения тела, начало контролируемых движений 
                        и практика осознания направления. Два инструктора продолжают сопровождать вас.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Level 3 */}
              <Card className="border-l-4 border-[var(--color-action-orange)]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-action-orange)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Уровень 3: Развороты и Трекинг</h3>
                      <p className="text-gray-700">
                        Освойте развороты на 90 градусов, научитесь трекингу (горизонтальному перемещению 
                        в свободном падении) и продолжайте совершенствовать положение тела. Два инструктора все еще с вами.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Level 4 */}
              <Card className="border-l-4 border-[var(--color-sky-blue)]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-sky-blue)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Уровень 4: Продвинутые Развороты</h3>
                      <p className="text-gray-700">
                        Продемонстрируйте развороты на 360 градусов, восстановление из нестабильных положений 
                        и покажите полное осознание высоты. Первый прыжок только с ОДНИМ инструктором!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Level 5 */}
              <Card className="border-l-4 border-[var(--color-action-orange)]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-action-orange)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Уровень 5: Независимость</h3>
                      <p className="text-gray-700">
                        Прыжок с одним инструктором, наблюдающим с расстояния. Практикуйте все предыдущие навыки, 
                        продемонстрируйте полный контроль и покажите, что можете справиться с прыжком самостоятельно.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Level 6 */}
              <Card className="border-l-4 border-[var(--color-sky-blue)]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-sky-blue)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                      6
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Уровень 6: Самостоятельное Выполнение</h3>
                      <p className="text-gray-700">
                        Ваш первый полностью САМОСТОЯТЕЛЬНЫЙ прыжок! Выполните конкретные маневры, включая развороты, 
                        трекинг, и продемонстрируйте полное осознание и контроль на протяжении всего прыжка.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Level 7 */}
              <Card className="border-l-4 border-[var(--color-action-orange)]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-action-orange)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                      7
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Уровень 7: Мастерство Свободного Падения</h3>
                      <p className="text-gray-700">
                        Усовершенствуйте все навыки, практикуйте более сложные маневры и подготовьтесь к прыжкам 
                        с другими. Создайте уверенность для выполнения требований к лицензии.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Level 8 */}
              <Card className="border-l-4 border-[var(--color-sky-blue)]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-sky-blue)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                      8
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Уровень 8: Выпускной Прыжок</h3>
                      <p className="text-gray-700">
                        Финальный оценочный прыжок, демонстрирующий все навыки. После этого прыжка и завершения 
                        требуемых 25 общих прыжков вы получите свою лицензию USPA A-License!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* After AFF */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              После AFF: Ваша A-License
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              После завершения программы AFF и накопления 25 общих прыжков вы получите лицензию USPA A-License. 
              Это позволит вам прыгать на любой дропзоне в мире и откроет бесконечные возможности:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-t-4 border-[var(--color-action-orange)]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3">Групповые Прыжки</h3>
                  <p className="text-gray-700">
                    Присоединяйтесь к другим парашютистам в создании формаций во время свободного падения. 
                    Работайте в команде для создания удивительных воздушных узоров.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-[var(--color-sky-blue)]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3">Пилотирование Купола</h3>
                  <p className="text-gray-700">
                    Развивайте навыки пилотирования парашюта, изучайте продвинутые маневры и участвуйте 
                    в соревнованиях по пилотированию купола.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-[var(--color-action-orange)]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3">Фрифлай</h3>
                  <p className="text-gray-700">
                    Научитесь летать в вертикальных положениях - сидя, стоя, вниз головой. Испытайте 
                    совершенно новое измерение парашютного спорта.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-[var(--color-sky-blue)]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3">Обучение Инструкторов</h3>
                  <p className="text-gray-700">
                    В конечном итоге станьте инструктором по парашютному спорту сами и делитесь своей страстью с новыми прыгунами.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Стоимость и Требования
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Стоимость Программы
                  </h3>
                  <div className="space-y-3 text-gray-700 mb-6">
                    <p className="flex justify-between">
                      <span>Полный курс AFF (8 уровней):</span>
                      <span className="font-bold">$2,495</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Дополнительные тренировочные прыжки:</span>
                      <span className="font-bold">$89/прыжок</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Аренда оборудования:</span>
                      <span className="font-bold">Включено</span>
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">
                    * Пакет включает наземную подготовку, все 8 уровней AFF, аренду оборудования и учебные материалы. 
                    Дополнительные прыжки для достижения 25 общих прыжков оплачиваются отдельно.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Требования
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>✓ Минимальный возраст: 18 лет</li>
                    <li>✓ Максимальный вес: 105 кг (230 фунтов)</li>
                    <li>✓ Хорошее физическое здоровье</li>
                    <li>✓ Действительное удостоверение личности с фото</li>
                    <li>✓ Заполненная медицинская анкета</li>
                    <li>✓ Временные затраты: 2-4 недели обычно</li>
                    <li>✓ Планирование в зависимости от погоды</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-sky-blue)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Готовы Стать Парашютистом?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Начните обучение AFF и получите лицензию парашютиста
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90 text-white font-bold text-lg px-8 py-6"
            >
              <Link href="/skydiving/pricing">Записаться на AFF</Link>
            </Button>
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="bg-white text-[var(--color-navy)] hover:bg-gray-100 font-bold text-lg px-8 py-6 border-white"
            >
              <Link href="/contact">Запланировать Консультацию</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}