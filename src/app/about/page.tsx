"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Users, Plane, Building, CheckCircle2 } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1436262513933-a0b06755c784?q=80&w=2071"
            alt="О Apex Ascension"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              О Apex Ascension
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Где страсть к авиации встречается с превосходством в обучении
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Наша История
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Основанная в 2008 году, Apex Ascension начала с простого видения: делиться невероятным опытом 
                  полета со всеми, от искателей острых ощущений до начинающих профессиональных пилотов. То, что 
                  начиналось как небольшой дропзона с двумя самолетами, выросло в одно из ведущих 
                  авиационных учебных заведений региона.
                </p>
                <p>
                  Сегодня мы управляем как процветающей парашютной операцией, так и сертифицированной летной школой из 
                  нашего современного объекта. Мы помогли более 10 000 человек испытать острые ощущения от их 
                  первого прыжка с парашютом и обучили более 500 пилотов, которые продолжили успешные авиационные карьеры.
                </p>
                <p>
                  Наша приверженность всегда была одинаковой: обеспечивать безопасные, профессиональные и незабываемые впечатления 
                  в небе. Прыгаете ли вы с высоты 14 000 футов или берете свой первый урок полета, вы 
                  часть семьи Apex Ascension.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Наша Миссия и Ценности
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="p-8">
                    <Shield className="h-16 w-16 text-[var(--color-sky-blue)] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Безопасность Превыше Всего
                    </h3>
                    <p className="text-gray-700">
                      Безопасность никогда не ставится под угрозу. Мы поддерживаем самые высокие стандарты в оборудовании, обучении, 
                      и операциях. Наш 100% рекорд безопасности говорит сам за себя.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-8">
                    <Award className="h-16 w-16 text-[var(--color-action-orange)] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Превосходство
                    </h3>
                    <p className="text-gray-700">
                      Мы стремимся предоставлять обучение и впечатления мирового класса. Наша команда состоит 
                      из высококвалифицированных профессионалов, которые страстно увлечены авиацией.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-8">
                    <Users className="h-16 w-16 text-[var(--color-sky-blue)] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Сообщество
                    </h3>
                    <p className="text-gray-700">
                      Мы больше, чем бизнес – мы сообщество энтузиастов авиации. Мы поддерживаем мечты друг 
                      друга и празднуем каждую веху вместе.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Facilities */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Объекты Мирового Класса
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2071"
                      alt="Современный Ангар"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Building className="h-8 w-8 text-[var(--color-sky-blue)] mb-3" />
                    <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-3">Современный Ангарный Комплекс</h3>
                    <p className="text-gray-700">
                      Наш ангар площадью 15 000 кв. футов вмещает весь наш флот с выделенными зонами технического обслуживания, 
                      обеспечивая постоянную готовность каждого воздушного судна к полету.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
                      alt="Учебные Помещения"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 text-[var(--color-action-orange)] mb-3" />
                    <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-3">Профессиональные Классы</h3>
                    <p className="text-gray-700">
                      Климат-контролируемые комнаты для брифингов, оснащенные современными AV-системами, авиатренажерами, 
                      и комплексными учебными материалами.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070"
                      alt="Частная ВПП"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Plane className="h-8 w-8 text-[var(--color-sky-blue)] mb-3" />
                    <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-3">Частная Взлетно-Посадочная Полоса</h3>
                    <p className="text-gray-700">
                      Асфальтированная ВПП длиной 5 000 футов с современными системами освещения, идеально подходящая для учебных операций 
                      и минимизации времени ожидания.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070"
                      alt="Студенческая Гостиная"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 text-[var(--color-action-orange)] mb-3" />
                    <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-3">Студенческая Гостиная</h3>
                    <p className="text-gray-700">
                      Уютная зона отдыха с WiFi, освежающими напитками и смотровой площадкой, где зрители 
                      могут наблюдать за взлетами и посадками.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Руководящая Команда
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070"
                          alt="Главный Пилот"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--color-navy)] mb-1">Капитан Дэвид Харрисон</h3>
                        <p className="text-[var(--color-sky-blue)] font-semibold mb-3">Главный Пилот и Сооснователь</p>
                        <p className="text-gray-700 text-sm">
                          ATP, CFII, MEI. 15 000+ часов налета. Бывший инструктор ВВС с 
                          20-летним опытом в авиации.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061"
                          alt="Менеджер Дропзоны"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--color-navy)] mb-1">Аманда Родригес</h3>
                        <p className="text-[var(--color-sky-blue)] font-semibold mb-3">Менеджер Дропзоны и Сооснователь</p>
                        <p className="text-gray-700 text-sm">
                          Инструктор USPA по тандемным прыжкам, инструктор AFF. 8 000+ прыжков. 15 лет в парашютных 
                          операциях и управлении безопасностью.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070"
                          alt="Директор по Обучению"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--color-navy)] mb-1">Маркус Чен</h3>
                        <p className="text-[var(--color-sky-blue)] font-semibold mb-3">Директор по Обучению</p>
                        <p className="text-gray-700 text-sm">
                          Мастер CFI, инструктор Gold Seal. Специализируется на ускоренных программах обучения 
                          и инструментальном инструктаже.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076"
                          alt="Директор по Безопасности"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--color-navy)] mb-1">Дженнифер Уильямс</h3>
                        <p className="text-[var(--color-sky-blue)] font-semibold mb-3">Директор по Безопасности и Соответствию</p>
                        <p className="text-gray-700 text-sm">
                          Инспектор по безопасности FAA (на пенсии). Обеспечивает, чтобы все операции превышали стандарты FAA 
                          и поддерживали наш безупречный рекорд безопасности.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Сертификации и Аффилиации
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-[var(--color-action-orange)] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-[var(--color-navy)] mb-2">Сертифицированная FAA Летная Школа Part 141</h3>
                        <p className="text-gray-700 text-sm">
                          Одобрена FAA для структурированных программ обучения пилотов с высочайшими стандартами.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-[var(--color-action-orange)] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-[var(--color-navy)] mb-2">Одобрена по Part 61</h3>
                        <p className="text-gray-700 text-sm">
                          Гибкие варианты обучения для студентов, которые предпочитают самостоятельный темп.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-[var(--color-action-orange)] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-[var(--color-navy)] mb-2">Член USPA</h3>
                        <p className="text-gray-700 text-sm">
                          Член United States Parachute Association с полным соблюдением требований безопасности.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-[var(--color-action-orange)] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-[var(--color-navy)] mb-2">Одобрено для Ветеранов</h3>
                        <p className="text-gray-700 text-sm">
                          Ветераны могут использовать свои льготы GI Bill для обучения полетам в нашем учреждении.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-[var(--color-action-orange)] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-[var(--color-navy)] mb-2">Член AOPA</h3>
                        <p className="text-gray-700 text-sm">
                          Член Aircraft Owners and Pilots Association, выступающий за общую авиацию.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-[var(--color-action-orange)] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-[var(--color-navy)] mb-2">Застраховано и Обеспечено</h3>
                        <p className="text-gray-700 text-sm">
                          Полностью застрахованные операции с комплексным покрытием ответственности.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats & Achievements */}
        <section className="py-20 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-sky-blue)] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Наши Достижения
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-[var(--color-action-orange)] mb-2">15+</div>
                <div className="text-lg">Лет в Бизнесе</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[var(--color-action-orange)] mb-2">10 000+</div>
                <div className="text-lg">Успешных Прыжков</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[var(--color-action-orange)] mb-2">500+</div>
                <div className="text-lg">Сертифицированных Пилотов</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[var(--color-action-orange)] mb-2">100%</div>
                <div className="text-lg">Рекорд Безопасности</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Присоединяйтесь к Семье Apex Ascension
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Будь вы здесь за острыми ощущениями или pursuing карьерой, мы готовы помочь вам достичь ваших авиационных мечтаний
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90 text-white font-bold text-lg px-8 py-6"
              >
                <Link href="/contact">Связаться с Нами</Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white font-bold text-lg px-8 py-6"
              >
                <Link href="/skydiving">Забронировать Прыжок</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}