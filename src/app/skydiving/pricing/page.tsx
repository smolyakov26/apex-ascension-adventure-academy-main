"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { CheckCircle2, Gift, Camera, Users } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { useState } from "react"

export default function PricingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-sky-blue)] text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Pricing & Packages
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Choose the perfect skydiving experience for you
            </p>
          </div>
        </section>

        {/* Main Pricing */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {/* Tandem Jump - Basic */}
              <Card className="relative border-2 hover:shadow-2xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Tandem Jump
                  </CardTitle>
                  <p className="text-gray-600">First-time jumpers</p>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-[var(--color-navy)] mb-2">$229</div>
                    <p className="text-gray-600">per person</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Jump from 14,000 feet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">60 seconds freefall</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Expert instructor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">All equipment included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Ground training</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-[var(--color-navy)] hover:bg-[var(--color-navy)]/90">
                    Book Now
                  </Button>
                </CardContent>
              </Card>

              {/* Tandem Jump + Photo/Video */}
              <Card className="relative border-2 border-[var(--color-action-orange)] hover:shadow-2xl transition-shadow">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-action-orange)]">
                  Most Popular
                </Badge>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Tandem + Media
                  </CardTitle>
                  <p className="text-gray-600">Complete package</p>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-[var(--color-navy)] mb-2">$378</div>
                    <p className="text-gray-600">per person</p>
                    <p className="text-sm text-gray-500 mt-1">(Save $50!)</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Everything in Tandem Jump</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">HD video of your jump</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Professional photos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Dedicated videographer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Digital download included</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90">
                    Book Now
                  </Button>
                </CardContent>
              </Card>

              {/* AFF Program */}
              <Card className="relative border-2 hover:shadow-2xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    AFF Course
                  </CardTitle>
                  <p className="text-gray-600">Get licensed</p>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-[var(--color-navy)] mb-2">$2,495</div>
                    <p className="text-gray-600">complete program</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">8-level AFF program</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">6-8 hours ground school</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">All equipment rental</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Path to A-License</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Training materials</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-[var(--color-navy)] hover:bg-[var(--color-navy)]/90">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Group Discounts */}
            <div className="max-w-4xl mx-auto">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Users className="h-8 w-8 text-[var(--color-action-orange)] flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Group Discounts Available
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
                        <div>
                          <p className="font-semibold">4-6 People</p>
                          <p className="text-2xl font-bold text-[var(--color-action-orange)]">$15 off</p>
                          <p className="text-sm">per person</p>
                        </div>
                        <div>
                          <p className="font-semibold">7-10 People</p>
                          <p className="text-2xl font-bold text-[var(--color-action-orange)]">$25 off</p>
                          <p className="text-sm">per person</p>
                        </div>
                        <div>
                          <p className="font-semibold">11+ People</p>
                          <p className="text-2xl font-bold text-[var(--color-action-orange)]">$40 off</p>
                          <p className="text-sm">per person</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Add-Ons */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Add-Ons & Extras
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <Camera className="h-10 w-10 text-[var(--color-action-orange)] mx-auto mb-4" />
                  <h3 className="font-bold text-[var(--color-navy)] mb-2">Photo Package</h3>
                  <p className="text-gray-600 text-sm mb-3">Professional photos only</p>
                  <p className="text-2xl font-bold text-[var(--color-navy)]">$99</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Camera className="h-10 w-10 text-[var(--color-sky-blue)] mx-auto mb-4" />
                  <h3 className="font-bold text-[var(--color-navy)] mb-2">Video Package</h3>
                  <p className="text-gray-600 text-sm mb-3">HD video only</p>
                  <p className="text-2xl font-bold text-[var(--color-navy)]">$129</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Gift className="h-10 w-10 text-[var(--color-action-orange)] mx-auto mb-4" />
                  <h3 className="font-bold text-[var(--color-navy)] mb-2">Gift Certificate</h3>
                  <p className="text-gray-600 text-sm mb-3">Any amount</p>
                  <p className="text-2xl font-bold text-[var(--color-navy)]">Custom</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-10 w-10 text-[var(--color-sky-blue)] mx-auto mb-4" />
                  <h3 className="font-bold text-[var(--color-navy)] mb-2">Spectator Pass</h3>
                  <p className="text-gray-600 text-sm mb-3">Friends & family</p>
                  <p className="text-2xl font-bold text-[var(--color-navy)]">Free</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Booking Calendar */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Book Your Jump
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12">
                Select your preferred date and we'll confirm availability within 24 hours
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Calendar */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[var(--color-navy)] mb-4 text-lg">Select a Date</h3>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border w-full"
                      disabled={(date) => date < new Date()}
                    />
                    <p className="text-sm text-gray-600 mt-4">
                      * Availability subject to weather conditions. We'll contact you to confirm your booking.
                    </p>
                  </CardContent>
                </Card>

                {/* Booking Form Preview */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[var(--color-navy)] mb-4 text-lg">Your Selection</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-600">Selected Date</p>
                        <p className="font-semibold text-[var(--color-navy)]">
                          {date ? date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'No date selected'}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Package</p>
                        <select className="w-full p-3 border rounded-md">
                          <option>Tandem Jump - $229</option>
                          <option>Tandem + Media - $378</option>
                          <option>AFF Course - $2,495</option>
                        </select>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Number of Jumpers</p>
                        <select className="w-full p-3 border rounded-md">
                          <option>1 person</option>
                          <option>2 people</option>
                          <option>3 people</option>
                          <option>4+ people (Group discount applies!)</option>
                        </select>
                      </div>
                    </div>
                    <Button className="w-full bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90 text-lg py-6">
                      Continue to Booking
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-4">
                      No payment required now. Pay when you jump.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Gift Certificates */}
        <section className="py-20 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-sky-blue)] text-white">
          <div className="container mx-auto px-4 text-center">
            <Gift className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Give the Gift of Flight
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Perfect for birthdays, graduations, or any special occasion. Gift certificates are valid for 12 months.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90 text-white font-bold text-lg px-8 py-6"
            >
              <Link href="/contact">Purchase Gift Certificate</Link>
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}