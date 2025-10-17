import Link from "next/link"
import { Plane, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-8 w-8 text-[var(--color-action-orange)]" />
              <span className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Apex Ascension
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Преодолейте гравитацию. Покорите небо.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-[var(--color-action-orange)] transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[var(--color-action-orange)] transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[var(--color-action-orange)] transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Быстрые ссылки
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-[var(--color-action-orange)] transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/skydiving" className="text-gray-300 hover:text-[var(--color-action-orange)] transition-colors">
                  Скайдайвинг
                </Link>
              </li>
              <li>
                <Link href="/pilot-school" className="text-gray-300 hover:text-[var(--color-action-orange)] transition-colors">
                  Школа пилотов
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[var(--color-action-orange)] transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[var(--color-action-orange)] transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Наши услуги
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/skydiving/tandem" className="text-gray-300 hover:text-[var(--color-action-orange)] transition-colors">
                  Тандемный прыжок
                </Link>
              </li>
              <li>
                <Link href="/skydiving/aff" className="text-gray-300 hover:text-[var(--color-action-orange)] transition-colors">
                  Обучение AFF
                </Link>
              </li>
              <li>
                <Link href="/pilot-school/courses" className="text-gray-300 hover:text-[var(--color-action-orange)] transition-colors">
                  Лицензии пилота
                </Link>
              </li>
              <li>
                <Link href="/pilot-school/discovery-flight" className="text-gray-300 hover:text-[var(--color-action-orange)] transition-colors">
                  Ознакомительный полёт
                </Link>
              </li>
              <li>
                <Link href="/skydiving/pricing" className="text-gray-300 hover:text-[var(--color-action-orange)] transition-colors">
                  Подарочные сертификаты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Свяжитесь с нами
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  ул. Авиационная, 123<br />
                  Скай-Харбор, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[var(--color-action-orange)]" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-[var(--color-action-orange)] transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[var(--color-action-orange)]" />
                <a href="mailto:info@apexascension.com" className="text-gray-300 hover:text-[var(--color-action-orange)] transition-colors">
                  info@apexascension.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Apex Ascension. Все права защищены. | Сертифицированная FAA лётная школа</p>
        </div>
      </div>
    </footer>
  )
}