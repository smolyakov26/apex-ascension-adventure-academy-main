"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, Clock, Users, Weight, Calendar } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function TandemPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-20">
        <Image
          src="https://images.unsplash.com/photo-1512626120412-faf41adb4874?q=80&w=2070"
          alt="Тандемный Прыжок с Парашютом"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Тандемный Прыжок
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Ваш Первый Вкус Полета. Опыт Не Требуется.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Чего Ожидать
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Ваш тандемный прыжок - это незабываемое впечатление, не требующее предварительной подготовки. 
              Вы будете надежно пристегнуты к сертифицированному инструктору, который берет на себя все технические аспекты, 
              пока вы наслаждаетесь невероятным ощущением свободного падения.
            </p>

            {/* Step by Step Process */}
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-action-orange)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Регистрация и Оформление Документов
                  </h3>
                  <p className="text-gray-700">
                    Прибывайте за 30 минут до назначенного времени для оформления документов и встречи с инструктором.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-action-orange)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Краткий Инструктаж
                  </h3>
                  <p className="text-gray-700">
                    Изучите основы, включая положение тела во время свободного падения, чего ожидать во время прыжка, 
                    и как безопасно приземлиться (15-20 минут).
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-action-orange)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Экипировка
                  </h3>
                  <p className="text-gray-700">
                    Вам подберут комбинезон, подвесную систему и очки. Ваш инструктор дважды проверит все оборудование.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-action-orange)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Полет
                  </h3>
                  <p className="text-gray-700">
                    Поднимитесь на борт нашего самолета для живописного 15-минутного подъема на 14 000 футов. Наслаждайтесь 
                    захватывающими видами и наращивайте волнение вместе с вашей группой для прыжков.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-action-orange)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Прыжок!
                  </h3>
                  <p className="text-gray-700">
                    Испытайте 60 секунд чистого адреналина, свободно падая со скоростью 120 миль в час! Почувствуйте порыв ветра 
                    и насладитесь невероятными видами с высоты двух миль.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-action-orange)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  6
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Полет под Парашютом
                  </h3>
                  <p className="text-gray-700">
                    После свободного падения насладитесь спокойным 5-7 минутным полетом под парашютом с потрясающими панорамными видами. 
                    Ваш инструктор может даже позволить вам помочь в управлении!
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-action-orange)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  7
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Приземление и Празднование
                  </h3>
                  <p className="text-gray-700">
                    Ваш инструктор проведет вас к плавному приземлению в предназначенной для этого зоне. Отпразднуйте ваше достижение 
                    с друзьями и семьей!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Требования и Ограничения
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="h-6 w-6 text-[var(--color-action-orange)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[var(--color-navy)] mb-2">Минимальный Возраст</h3>
                      <p className="text-gray-700">18 лет (требуется удостоверение личности с фото)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Weight className="h-6 w-6 text-[var(--color-action-orange)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[var(--color-navy)] mb-2">Лимит Веса</h3>
                      <p className="text-gray-700">Максимум 105 кг (230 фунтов)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-[var(--color-action-orange)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[var(--color-navy)] mb-2">Общее Время</h3>
                      <p className="text-gray-700">Планируйте провести 3-4 часа в дропзоне</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Users className="h-6 w-6 text-[var(--color-action-orange)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[var(--color-navy)] mb-2">Требования к Здоровью</h3>
                      <p className="text-gray-700">Хорошее физическое здоровье (требуется медицинская анкета)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-[var(--color-navy)] mb-3 text-lg">Что Надеть и Взять с Собой</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                    <span>Удобная спортивная одежда (избегайте свободных предметов)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                    <span>Кроссовки или спортивная обувь (без сандалий или ботинок)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                    <span>Действительное удостоверение личности государственного образца с фото</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                    <span>Солнечные очки (по желанию - мы предоставляем защитные очки)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                    <span>Оставьте украшения и ценности дома</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Часто Задаваемые Вопросы
            </h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold text-[var(--color-navy)]">
                  Безопасен ли парашютный спорт?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Да! Тандемные прыжки имеют отличный рекорд безопасности. Все наше оборудование регулярно проверяется 
                  и обслуживается в соответствии со стандартами USPA. Ваш инструктор - сертифицированный профессионал 
                  с тысячами прыжков. У нас 100% рекорд безопасности, и мы принимаем все меры предосторожности, чтобы 
                  ваш прыжок был как захватывающим, так и безопасным.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold text-[var(--color-navy)]">
                  Сколько длится свободное падение?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Вы испытаете примерно 60 секунд свободного падения с высоты 14 000 футов, достигая скорости 
                  до 120 миль в час! После раскрытия парашюта вы насладитесь спокойным 5-7 минутным полетом 
                  под куполом обратно на землю.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold text-[var(--color-navy)]">
                  Что если я боюсь высоты?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Многие из наших прыгунов боятся высоты! На высоте 14 000 футов вы находитесь так высоко, что это 
                  не похоже на взгляд вниз с высокого здания. Большинство людей находят этот опыт менее страшным, 
                  чем они ожидали. Ваш инструктор будет поддерживать вас на каждом этапе.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-semibold text-[var(--color-navy)]">
                  Могу ли я привести зрителей?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Абсолютно! Друзья и семья приветствуются в нашей зоне для наблюдения. Они могут видеть, как вы 
                  садитесь в самолет, наблюдать за вашим выходом и быть там, когда вы приземлитесь. Многие приносят 
                  камеры, чтобы запечатлеть момент!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-semibold text-[var(--color-navy)]">
                  Что происходит, если погода плохая?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Безопасность всегда на первом месте. Если погодные условия не подходят для прыжков, мы перенесем 
                  ваш прыжок на другой день без дополнительной оплаты. Мы внимательно следим за погодными условиями 
                  и уведомим вас как можно скорее, если условия окажутся неблагоприятными.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left font-semibold text-[var(--color-navy)]">
                  Нужна ли какая-либо предварительная подготовка?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Предварительная подготовка не требуется! Вы получите краткий 15-20 минутный инструктаж перед 
                  прыжком, который охватывает все, что вам нужно знать. Ваш инструктор берет на себя все технические 
                  аспекты - вам просто нужно прийти готовым к приключению!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-sky-blue)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Готовы к Тандемному Прыжку?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Забронируйте свой незабываемый прыжок с парашютом сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90 text-white font-bold text-lg px-8 py-6"
            >
              <Link href="/skydiving/pricing">Посмотреть Цены и Забронировать</Link>
            </Button>
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="bg-white text-[var(--color-navy)] hover:bg-gray-100 font-bold text-lg px-8 py-6 border-white"
            >
              <Link href="/contact">Есть Вопросы? Свяжитесь с Нами</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}