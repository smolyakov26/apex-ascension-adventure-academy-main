"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, DollarSign, Clock, Award } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-sky-blue)] text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Курсы Подготовки Пилотов
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Комплексные программы обучения пилотированию, адаптированные к вашим авиационным целям
            </p>
          </div>
        </section>

        {/* Course Comparison */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left font-bold text-[var(--color-navy)]">Курс</th>
                    <th className="p-4 text-center font-bold text-[var(--color-navy)]">Часы Полета</th>
                    <th className="p-4 text-center font-bold text-[var(--color-navy)]">Продолжительность</th>
                    <th className="p-4 text-center font-bold text-[var(--color-navy)]">Стоимость</th>
                    <th className="p-4 text-center font-bold text-[var(--color-navy)]">Действие</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">PPL-UL (Сверхлегкие Судна)</td>
                    <td className="p-4 text-center">42 часа</td>
                    <td className="p-4 text-center">2-4 месяца</td>
                    <td className="p-4 text-center font-bold text-[var(--color-navy)]">250 000 ₽</td>
                    <td className="p-4 text-center">
                      <Button asChild size="sm" className="bg-[var(--color-navy)] hover:bg-[var(--color-navy)]/90">
                        <Link href="/contact">Записаться</Link>
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Мотопараплан</td>
                    <td className="p-4 text-center">15-20 часов</td>
                    <td className="p-4 text-center">2-3 недели</td>
                    <td className="p-4 text-center font-bold text-[var(--color-navy)]">120 000 ₽</td>
                    <td className="p-4 text-center">
                      <Button asChild size="sm" className="bg-[var(--color-navy)] hover:bg-[var(--color-navy)]/90">
                        <Link href="/contact">Записаться</Link>
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Параплан</td>
                    <td className="p-4 text-center">10-15 часов</td>
                    <td className="p-4 text-center">1-2 месяца</td>
                    <td className="p-4 text-center font-bold text-[var(--color-navy)]">80 000 ₽</td>
                    <td className="p-4 text-center">
                      <Button asChild size="sm" className="bg-[var(--color-navy)] hover:bg-[var(--color-navy)]/90">
                        <Link href="/contact">Записаться</Link>
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Инструктор Параплана</td>
                    <td className="p-4 text-center">25-30 часов</td>
                    <td className="p-4 text-center">2-4 месяца</td>
                    <td className="p-4 text-center font-bold text-[var(--color-navy)]">60 000 ₽</td>
                    <td className="p-4 text-center">
                      <Button asChild size="sm" className="bg-[var(--color-navy)] hover:bg-[var(--color-navy)]/90">
                        <Link href="/contact">Записаться</Link>
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Инструктор Мотопараплана</td>
                    <td className="p-4 text-center">20-25 часов</td>
                    <td className="p-4 text-center">1-3 месяца</td>
                    <td className="p-4 text-center font-bold text-[var(--color-navy)]">70 000 ₽</td>
                    <td className="p-4 text-center">
                      <Button asChild size="sm" className="bg-[var(--color-navy)] hover:bg-[var(--color-navy)]/90">
                        <Link href="/contact">Записаться</Link>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Detailed Course Info */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Подробная Информация о Курсах
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {/* PPL-UL */}
                <AccordionItem value="ppl-ul" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-bold text-xl text-[var(--color-navy)] hover:no-underline">
                    PPL-UL (Сверхлегкие Судна)
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pt-4">
                    <p className="mb-4">
                      Лицензия пилота сверхлегких воздушных судов - ваш первый шаг в авиацию. Эта комплексная программа научит вас 
                      всему необходимому для безопасной эксплуатации сверхлегких самолетов и перевозки пассажиров.
                    </p>
                    <h4 className="font-bold mb-2">Что Вы Изучите:</h4>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                        <span>Системы самолета и аэродинамика</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                        <span>Взлеты, посадки и схемы полета</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                        <span>Навигация и маршрутные полеты</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                        <span>Аварийные процедуры</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                        <span>Авиационные правила и нормативы</span>
                      </li>
                    </ul>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-[var(--color-sky-blue)]" />
                        <div>
                          <p className="text-sm font-semibold">Продолжительность</p>
                          <p className="text-sm">2-4 месяца</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-[var(--color-sky-blue)]" />
                        <div>
                          <p className="text-sm font-semibold">Требования</p>
                          <p className="text-sm">18 лет, медицинская справка</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-[var(--color-sky-blue)]" />
                        <div>
                          <p className="text-sm font-semibold">Стоимость</p>
                          <p className="text-sm">250 000 ₽ в среднем</p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Paramotor */}
                <AccordionItem value="paramotor" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-bold text-xl text-[var(--color-navy)] hover:no-underline">
                    Мотопараплан
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pt-4">
                    <p className="mb-4">
                      Обучение полетам на мотопараплане - самый доступный способ подняться в небо. 
                      Идеально для тех, кто хочет летать самостоятельно без сложных процедур подготовки.
                    </p>
                    <h4 className="font-bold mb-2">Что Вы Изучите:</h4>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                        <span>Основы управления мотопарапланом</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                        <span>Старты и посадки с двигателем</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                        <span>Техника безопасности и аварийные ситуации</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                        <span>Метеорология для мотопарапланеристов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                        <span>Обслуживание и эксплуатация оборудования</span>
                      </li>
                    </ul>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-[var(--color-sky-blue)]" />
                        <div>
                          <p className="text-sm font-semibold">Продолжительность</p>
                          <p className="text-sm">2-3 недели</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-[var(--color-sky-blue)]" />
                        <div>
                          <p className="text-sm font-semibold">Требования</p>
                          <p className="text-sm">16 лет, хорошее здоровье</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-[var(--color-sky-blue)]" />
                        <div>
                          <p className="text-sm font-semibold">Стоимость</p>
                          <p className="text-sm">120 000 ₽ в среднем</p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Paragliding */}
                <AccordionItem value="paragliding" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-bold text-xl text-[var(--color-navy)] hover:no-underline">
                    Параплан
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pt-4">
                    <p className="mb-4">
                      Научитесь летать как птица! Парящие полеты на параплане с использованием восходящих потоков - 
                      это чистая магия полета и свобода в небе.
                    </p>
                    <h4 className="font-bold mb-2">Что Вы Изучите:</h4>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                        <span>Наземная подготовка и старты</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                        <span>Техника парящих полетов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                        <span>Метеорология и поиск потоков</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                        <span>Посадки в сложных условиях</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                        <span>Соревновательные техники</span>
                      </li>
                    </ul>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-[var(--color-sky-blue)]" />
                        <div>
                          <p className="text-sm font-semibold">Продолжительность</p>
                          <p className="text-sm">1-2 месяца</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-[var(--color-sky-blue)]" />
                        <div>
                          <p className="text-sm font-semibold">Требования</p>
                          <p className="text-sm">16 лет, физическая подготовка</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-[var(--color-sky-blue)]" />
                        <div>
                          <p className="text-sm font-semibold">Стоимость</p>
                          <p className="text-sm">80 000 ₽ в среднем</p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Instructor Courses */}
                <AccordionItem value="instructor" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-bold text-xl text-[var(--color-navy)] hover:no-underline">
                    Инструкторские Курсы
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pt-4">
                    <p className="mb-4">
                      Станьте инструктором и делитесь своей страстью к полетам! Научитесь профессионально обучать 
                      других искусству пилотирования сверхлегких воздушных судов.
                    </p>
                    <h4 className="font-bold mb-2">Что Вы Изучите:</h4>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                        <span>Методика обучения пилотированию</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                        <span>Психология обучения и безопасность</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                        <span>Разработка учебных программ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                        <span>Оценка навыков студентов</span>
                      </li>
                    </ul>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-[var(--color-sky-blue)]" />
                        <div>
                          <p className="text-sm font-semibold">Продолжительность</p>
                          <p className="text-sm">1-4 месяца</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-[var(--color-sky-blue)]" />
                        <div>
                          <p className="text-sm font-semibold">Требования</p>
                          <p className="text-sm">Опыт пилотирования, рекомендации</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-[var(--color-sky-blue)]" />
                        <div>
                          <p className="text-sm font-semibold">Стоимость</p>
                          <p className="text-sm">60 000-70 000 ₽</p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Financing */}
        <section id="financing" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Варианты Оплаты
              </h2>
              <p className="text-lg text-gray-700 text-center mb-12">
                Мы понимаем, что обучение полетам - это значительные инвестиции. Мы предлагаем несколько вариантов, чтобы сделать вашу авиационную мечту более доступной.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4">Планы Оплаты</h3>
                    <p className="text-gray-700 mb-4">
                      Оплата по факту или структурированные ежемесячные планы оплаты. Проверка кредитной истории не требуется.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Гибкое планирование</li>
                      <li>✓ Без долгосрочных обязательств</li>
                      <li>✓ Оплата за занятие или блоками</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4">Партнерское Финансирование</h3>
                    <p className="text-gray-700 mb-4">
                      Мы сотрудничаем с ведущими финансовыми компаниями, чтобы предложить конкурентоспособные варианты кредитования.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Конкурентоспособные процентные ставки</li>
                      <li>✓ Сроки до 5 лет</li>
                      <li>✓ Быстрый процесс одобрения</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4">Корпоративное Обучение</h3>
                    <p className="text-gray-700 mb-4">
                      Специальные условия для корпоративных клиентов и группового обучения сотрудников.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Скидки для групп</li>
                      <li>✓ Индивидуальные программы</li>
                      <li>✓ Гибкий график обучения</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4">Стипендии</h3>
                    <p className="text-gray-700 mb-4">
                      Мы предлагаем стипендии по результатам и можем помочь вам найти внешние авиационные стипендии.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Ежегодные стипендиальные программы</li>
                      <li>✓ Программы для женщин в авиации</li>
                      <li>✓ Помощь в подаче заявок на стипендии</li>
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
              Готовы Начать Обучение?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами сегодня, чтобы обсудить, какой курс подходит именно вам
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90 text-white font-bold text-lg px-8 py-6"
              >
                <Link href="/contact">Запланировать Консультацию</Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="bg-white text-[var(--color-navy)] hover:bg-gray-100 font-bold text-lg px-8 py-6 border-white"
              >
                <Link href="/pilot-school/discovery-flight">Записаться на Пробный Полет</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}