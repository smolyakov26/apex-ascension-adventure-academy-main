"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Twitter } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20">
        {/* Заголовок */}
        <section className="py-16 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-sky-blue)] text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Свяжитесь с нами
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Есть вопросы? Мы здесь, чтобы помочь. Свяжитесь с нами в любое время.
            </p>
          </div>
        </section>

        {/* Карточки контактной информации */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto -mt-20 relative z-10">
              <Card className="shadow-xl">
                <CardContent className="p-6 text-center">
                  <Phone className="h-10 w-10 text-[var(--color-action-orange)] mx-auto mb-3" />
                  <h3 className="font-bold text-[var(--color-navy)] mb-2">Позвоните нам</h3>
                  <a href="tel:+15551234567" className="text-gray-700 hover:text-[var(--color-action-orange)] transition-colors">
                    (555) 123-4567
                  </a>
                </CardContent>
              </Card>

              <Card className="shadow-xl">
                <CardContent className="p-6 text-center">
                  <Mail className="h-10 w-10 text-[var(--color-sky-blue)] mx-auto mb-3" />
                  <h3 className="font-bold text-[var(--color-navy)] mb-2">Напишите нам</h3>
                  <a href="mailto:info@apexascension.com" className="text-gray-700 hover:text-[var(--color-action-orange)] transition-colors text-sm">
                    info@apexascension.com
                  </a>
                </CardContent>
              </Card>

              <Card className="shadow-xl">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-10 w-10 text-[var(--color-action-orange)] mx-auto mb-3" />
                  <h3 className="font-bold text-[var(--color-navy)] mb-2">Посетите нас</h3>
                  <p className="text-gray-700 text-sm">
                    123 Aviation Way<br />Sky Harbor, CA 90210
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-xl">
                <CardContent className="p-6 text-center">
                  <Clock className="h-10 w-10 text-[var(--color-sky-blue)] mx-auto mb-3" />
                  <h3 className="font-bold text-[var(--color-navy)] mb-2">Часы работы</h3>
                  <p className="text-gray-700 text-sm">
                    7 дней в неделю<br />8:00 - 18:00
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Формы обратной связи */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Отправьте нам сообщение
              </h2>

              <Tabs defaultValue="skydiving" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="skydiving" className="text-lg">Запрос на прыжки</TabsTrigger>
                  <TabsTrigger value="flight-school" className="text-lg">Запрос в летную школу</TabsTrigger>
                </TabsList>

                {/* Форма для прыжков с парашютом */}
                <TabsContent value="skydiving">
                  <Card>
                    <CardContent className="p-8">
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="sky-first-name">Имя *</Label>
                            <Input id="sky-first-name" placeholder="Иван" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="sky-last-name">Фамилия *</Label>
                            <Input id="sky-last-name" placeholder="Иванов" required />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="sky-email">Email *</Label>
                            <Input id="sky-email" type="email" placeholder="ivan@example.com" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="sky-phone">Телефон *</Label>
                            <Input id="sky-phone" type="tel" placeholder="(555) 123-4567" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="sky-jump-type">Тип прыжка *</Label>
                          <Select>
                            <SelectTrigger id="sky-jump-type">
                              <SelectValue placeholder="Выберите тип прыжка" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="tandem">Тандемный прыжок</SelectItem>
                              <SelectItem value="aff">Обучение AFF</SelectItem>
                              <SelectItem value="experienced">Опытный прыгун</SelectItem>
                              <SelectItem value="gift">Подарочный сертификат</SelectItem>
                              <SelectItem value="group">Групповое мероприятие</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="sky-date">Предпочтительная дата</Label>
                          <Input id="sky-date" type="date" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="sky-participants">Количество участников</Label>
                          <Select>
                            <SelectTrigger id="sky-participants">
                              <SelectValue placeholder="Выберите количество" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 человек</SelectItem>
                              <SelectItem value="2">2 человека</SelectItem>
                              <SelectItem value="3">3 человека</SelectItem>
                              <SelectItem value="4">4 человека</SelectItem>
                              <SelectItem value="5plus">5+ человек</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="sky-message">Сообщение</Label>
                          <Textarea 
                            id="sky-message" 
                            placeholder="Расскажите нам о вашем уровне опыта, вопросах или особых требованиях..."
                            rows={5}
                          />
                        </div>

                        <Button className="w-full bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90 text-lg py-6">
                          Отправить запрос
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Форма для летной школы */}
                <TabsContent value="flight-school">
                  <Card>
                    <CardContent className="p-8">
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="flight-first-name">Имя *</Label>
                            <Input id="flight-first-name" placeholder="Иван" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="flight-last-name">Фамилия *</Label>
                            <Input id="flight-last-name" placeholder="Иванов" required />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="flight-email">Email *</Label>
                            <Input id="flight-email" type="email" placeholder="ivan@example.com" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="flight-phone">Телефон *</Label>
                            <Input id="flight-phone" type="tel" placeholder="(555) 123-4567" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="flight-program">Интересующая программа *</Label>
                          <Select>
                            <SelectTrigger id="flight-program">
                              <SelectValue placeholder="Выберите программу" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="discovery">Вводный полет</SelectItem>
                              <SelectItem value="ppl">Лицензия частного пилота (PPL)</SelectItem>
                              <SelectItem value="ir">Инструментальный рейтинг (IR)</SelectItem>
                              <SelectItem value="cpl">Лицензия коммерческого пилота (CPL)</SelectItem>
                              <SelectItem value="me">Рейтинг многодвигательных ВС</SelectItem>
                              <SelectItem value="cfi">Инструктор (CFI)</SelectItem>
                              <SelectItem value="other">Другое / Не уверен</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="flight-experience">Текущий уровень опыта</Label>
                          <Select>
                            <SelectTrigger id="flight-experience">
                              <SelectValue placeholder="Выберите опыт" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">Нет опыта</SelectItem>
                              <SelectItem value="some-hours">Несколько часов налета (курсант)</SelectItem>
                              <SelectItem value="ppl">Частный пилот</SelectItem>
                              <SelectItem value="ir">Инструментальный рейтинг</SelectItem>
                              <SelectItem value="cpl">Коммерческий пилот</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="flight-timeline">Желаемые сроки начала</Label>
                          <Select>
                            <SelectTrigger id="flight-timeline">
                              <SelectValue placeholder="Выберите сроки" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="asap">Как можно скорее / В течение 2 недель</SelectItem>
                              <SelectItem value="month">В течение 1 месяца</SelectItem>
                              <SelectItem value="3months">В течение 3 месяцев</SelectItem>
                              <SelectItem value="6months">В течение 6 месяцев</SelectItem>
                              <SelectItem value="exploring">Просто изучаю варианты</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="flight-message">Сообщение</Label>
                          <Textarea 
                            id="flight-message" 
                            placeholder="Расскажите нам о ваших целях в авиации, вопросах о финансировании или любой другой информации..."
                            rows={5}
                          />
                        </div>

                        <Button className="w-full bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90 text-lg py-6">
                          Отправить запрос
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Секция с картой */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Найдите нас
            </h2>
            <div className="max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-0">
                  {/* Заглушка встроенной карты */}
                  <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.4662689933086!2d-118.38826368478394!3d34.06318188060467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf07045279bf%3A0xf67a9a6797bdfae4!2sLos%20Angeles%20International%20Airport!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    />
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-[var(--color-navy)] mb-3 text-lg">Как добраться на машине</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Из центра города:</strong> Двигайтесь по I-5 North, сверните на Aviation Blvd, поверните направо на Sky Harbor Road.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Из аэропорта:</strong> Следуйте указателям на общую авиацию, мы расположены рядом с главным терминалом.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--color-navy)] mb-3 text-lg">Парковка и доступ</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        Бесплатная парковка на нашей главной стоянке. Зона для зрителей доступна через главный вход.
                      </p>
                      <p className="text-gray-700 text-sm">
                        Ищите большую вывеску "Apex Ascension" на ангаре.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Дополнительная контактная информация */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Часы работы */}
                <Card>
                  <CardContent className="p-8">
                    <Clock className="h-10 w-10 text-[var(--color-sky-blue)] mb-4" />
                    <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Часы работы
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex justify-between">
                        <span className="font-semibold">Понедельник - Пятница:</span>
                        <span>8:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Суббота:</span>
                        <span>7:00 - 19:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Воскресенье:</span>
                        <span>7:00 - 19:00</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-4">
                        * Часы работы могут меняться в зависимости от погодных условий. Позвоните, чтобы уточнить.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Свяжитесь с нами */}
                <Card>
                  <CardContent className="p-8">
                    <MessageCircle className="h-10 w-10 text-[var(--color-action-orange)] mb-4" />
                    <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Свяжитесь с нами
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Подпишитесь на нас в соцсетях для получения обновлений, фото, видео и специальных предложений!
                    </p>
                    <div className="flex gap-4 mb-6">
                      <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-[var(--color-sky-blue)]/10 rounded-full flex items-center justify-center hover:bg-[var(--color-sky-blue)] hover:text-white transition-colors"
                      >
                        <Facebook className="h-6 w-6" />
                      </a>
                      <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-[var(--color-action-orange)]/10 rounded-full flex items-center justify-center hover:bg-[var(--color-action-orange)] hover:text-white transition-colors"
                      >
                        <Instagram className="h-6 w-6" />
                      </a>
                      <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-[var(--color-sky-blue)]/10 rounded-full flex items-center justify-center hover:bg-[var(--color-sky-blue)] hover:text-white transition-colors"
                      >
                        <Twitter className="h-6 w-6" />
                      </a>
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Онлайн-чат:</strong> Нажмите на иконку чата в правом нижнем углу, чтобы пообщаться с нами в реальном времени в часы работы.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Экстренный контакт */}
        <section className="py-12 bg-red-50 border-t-4 border-red-500">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-red-700 mb-4">Экстренный контакт</h3>
              <p className="text-gray-700 mb-4">
                Для срочных вопросов безопасности или отмен, связанных с погодой, в день запланированного мероприятия:
              </p>
              <a 
                href="tel:+15559999999" 
                className="text-3xl font-bold text-red-700 hover:text-red-800 transition-colors"
              >
                (555) 999-9999
              </a>
              <p className="text-sm text-gray-600 mt-4">
                Доступно 24/7 только для запланированных участников
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}