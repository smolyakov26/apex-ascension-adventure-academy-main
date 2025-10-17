"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { CheckCircle2, Plane, Clock, DollarSign, Users, Camera } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { useState } from "react"
import Link from "next/link"

export default function DiscoveryFlightPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1436262513933-a0b06755c784?q=80&w=2071"
            alt="Discovery Flight"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Discovery Flight
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Take the controls and experience the thrill of flying
            </p>
            <p className="text-3xl font-bold text-[var(--color-action-orange)] mb-8">
              Only $199
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90 text-white font-bold text-lg px-8 py-6"
            >
              <Link href="#booking">Book Your Discovery Flight</Link>
            </Button>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                What's Included
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Your discovery flight is a full introductory lesson with a certified flight instructor. 
                This is not just a sightseeing tour – you'll actually fly the aircraft and learn what it takes to be a pilot!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="text-center border-t-4 border-[var(--color-sky-blue)]">
                <CardContent className="p-8">
                  <Clock className="h-12 w-12 text-[var(--color-sky-blue)] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3">1 Hour Flight Time</h3>
                  <p className="text-gray-700">
                    A full hour in the air with hands-on flying experience. You'll handle takeoff, maneuvering, and landing (with guidance).
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-t-4 border-[var(--color-action-orange)]">
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-[var(--color-action-orange)] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3">CFI Instruction</h3>
                  <p className="text-gray-700">
                    Fly with an experienced Certified Flight Instructor who will guide you through every step of the flight.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-t-4 border-[var(--color-sky-blue)]">
                <CardContent className="p-8">
                  <Plane className="h-12 w-12 text-[var(--color-sky-blue)] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3">Pre-Flight Briefing</h3>
                  <p className="text-gray-700">
                    Learn about the aircraft, flight controls, and what to expect during your flight in a thorough ground briefing.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-t-4 border-[var(--color-action-orange)]">
                <CardContent className="p-8">
                  <Camera className="h-12 w-12 text-[var(--color-action-orange)] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3">Photos & Videos</h3>
                  <p className="text-gray-700">
                    We'll capture your experience with photos and videos to commemorate your first flight (weather permitting).
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-t-4 border-[var(--color-sky-blue)]">
                <CardContent className="p-8">
                  <DollarSign className="h-12 w-12 text-[var(--color-sky-blue)] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3">Counts Toward License</h3>
                  <p className="text-gray-700">
                    If you decide to continue training, this hour counts toward your Private Pilot License requirements!
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-t-4 border-[var(--color-action-orange)]">
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-[var(--color-action-orange)] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3">Bring a Guest</h3>
                  <p className="text-gray-700">
                    Most aircraft have room for one additional passenger to share the experience with you (weight restrictions apply).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Your Discovery Flight Experience
              </h2>

              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-sky-blue)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-2">Arrival & Check-In (15 min)</h3>
                    <p className="text-gray-700">
                      Arrive at our flight school and meet your instructor. Complete a brief paperwork and get comfortable in our facility.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-sky-blue)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-2">Ground Briefing (30 min)</h3>
                    <p className="text-gray-700">
                      Learn about the aircraft you'll be flying, how the controls work, and what to expect during your flight. 
                      Ask any questions you have!
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-sky-blue)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-2">Pre-Flight Inspection (10 min)</h3>
                    <p className="text-gray-700">
                      Walk around the aircraft with your instructor, learning how pilots check the plane before every flight.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-action-orange)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-2">The Flight! (60 min)</h3>
                    <p className="text-gray-700">
                      Take to the skies! You'll handle the controls during most of the flight, learning basic maneuvers and 
                      experiencing the incredible feeling of piloting an aircraft. Your instructor will be right there guiding 
                      you and handling radio communications.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-sky-blue)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-2">Post-Flight Debrief (15 min)</h3>
                    <p className="text-gray-700">
                      Discuss your flight experience, review what you learned, and talk about next steps if you're interested 
                      in pursuing flight training. No pressure – just information!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Common Questions
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Do I need any experience?</h3>
                    <p className="text-gray-700">
                      Absolutely not! Discovery flights are designed for people with zero flight experience. Your instructor 
                      will teach you everything you need to know.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">What are the age requirements?</h3>
                    <p className="text-gray-700">
                      You must be at least 16 years old to take a discovery flight. There's no maximum age – we've had students 
                      in their 70s take their first flight with us!
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">What should I wear?</h3>
                    <p className="text-gray-700">
                      Dress comfortably and casually. Avoid loose clothing that might get caught. Closed-toe shoes are required. 
                      Sunglasses are recommended.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Will I get motion sick?</h3>
                    <p className="text-gray-700">
                      Motion sickness is rare but possible. We recommend not eating a heavy meal beforehand. If you're prone to 
                      motion sickness, let your instructor know – they can adjust the flight to be more comfortable.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">What if the weather is bad?</h3>
                    <p className="text-gray-700">
                      Safety comes first. If weather conditions aren't suitable, we'll reschedule your flight at no additional charge.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Is this a good gift?</h3>
                    <p className="text-gray-700">
                      Yes! Discovery flights make incredible gifts for birthdays, graduations, or any special occasion. 
                      Gift certificates are available.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Book Your Discovery Flight
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
                      * Discovery flights available 7 days a week, weather permitting
                    </p>
                  </CardContent>
                </Card>

                {/* Booking Summary */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[var(--color-navy)] mb-4 text-lg">Your Discovery Flight</h3>
                    <div className="space-y-4 mb-6">
                      <div className="pb-4 border-b">
                        <p className="text-sm text-gray-600">Selected Date</p>
                        <p className="font-semibold text-[var(--color-navy)]">
                          {date ? date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'No date selected'}
                        </p>
                      </div>
                      <div className="pb-4 border-b">
                        <p className="text-sm text-gray-600 mb-2">What's Included</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                            <span>1 hour flight time</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                            <span>CFI instruction & briefing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                            <span>All aircraft & fuel</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                            <span>Photos/videos of your flight</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[var(--color-action-orange)] flex-shrink-0 mt-0.5" />
                            <span>Counts toward PPL if you continue</span>
                          </li>
                        </ul>
                      </div>
                      <div className="flex items-center justify-between text-2xl font-bold text-[var(--color-navy)]">
                        <span>Total:</span>
                        <span>$199</span>
                      </div>
                    </div>
                    <Button className="w-full bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90 text-lg py-6">
                      Continue to Booking
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-4">
                      No payment required now. Pay when you arrive for your flight.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Gift Certificate */}
        <section className="py-20 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-sky-blue)] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Give the Gift of Flight
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discovery flight gift certificates make perfect presents for aviation enthusiasts
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