"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, Gauge, Users, Calendar } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function FleetPage() {
  const aircraft = [
    {
      name: "Cessna 172 Skyhawk",
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2071",
      type: "Single Engine",
      seats: "4",
      ideal: "PPL Training",
      features: ["Garmin G1000 Glass Cockpit", "Autopilot", "ADS-B Out", "Modern Interior"],
      rate: "$165/hour"
    },
    {
      name: "Piper Archer PA-28",
      image: "https://images.unsplash.com/photo-1583829366803-50c481e7f732?q=80&w=2070",
      type: "Single Engine",
      seats: "4",
      ideal: "PPL & IR Training",
      features: ["Dual Nav/Com", "IFR Certified", "6-Pack Instruments", "Reliable Performance"],
      rate: "$155/hour"
    },
    {
      name: "Cessna 172RG Cutlass",
      image: "https://images.unsplash.com/photo-1436262513933-a0b06755c784?q=80&w=2071",
      type: "Complex Single",
      seats: "4",
      ideal: "Commercial Training",
      features: ["Retractable Gear", "Variable Pitch Prop", "Complex Endorsement", "High Performance"],
      rate: "$185/hour"
    },
    {
      name: "Piper Seminole PA-44",
      image: "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?q=80&w=2069",
      type: "Multi-Engine",
      seats: "4",
      ideal: "Multi-Engine Rating",
      features: ["Twin Engines", "Counter-Rotating Props", "Advanced Avionics", "Professional Trainer"],
      rate: "$295/hour"
    },
    {
      name: "Cessna 182 Skylane",
      image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070",
      type: "High Performance",
      seats: "4",
      ideal: "Advanced Training",
      features: ["230 HP Engine", "G1000 NXi", "High-Performance Endorsement", "XC Capable"],
      rate: "$195/hour"
    },
    {
      name: "Beechcraft Baron 58",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070",
      type: "Multi-Engine",
      seats: "6",
      ideal: "Advanced Multi Training",
      features: ["Twin Turbocharged Engines", "High Performance", "Professional Twin", "Complex Systems"],
      rate: "$350/hour"
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-sky-blue)] text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Our Training Fleet
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Modern, well-maintained aircraft for every stage of your training
            </p>
          </div>
        </section>

        {/* Fleet Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Safety & Maintenance Excellence
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every aircraft in our fleet undergoes rigorous maintenance schedules exceeding FAA requirements. 
                Our dedicated maintenance team ensures that each plane is in peak condition for your training flights. 
                We invest heavily in modern avionics and safety equipment to provide you with the best training experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Plane className="h-12 w-12 text-[var(--color-sky-blue)] mx-auto mb-3" />
                  <p className="text-3xl font-bold text-[var(--color-navy)] mb-1">12+</p>
                  <p className="text-gray-600">Aircraft in Fleet</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Gauge className="h-12 w-12 text-[var(--color-action-orange)] mx-auto mb-3" />
                  <p className="text-3xl font-bold text-[var(--color-navy)] mb-1">100%</p>
                  <p className="text-gray-600">Maintenance Compliance</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Calendar className="h-12 w-12 text-[var(--color-sky-blue)] mx-auto mb-3" />
                  <p className="text-3xl font-bold text-[var(--color-navy)] mb-1">&lt;5</p>
                  <p className="text-gray-600">Avg Aircraft Age (yrs)</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-[var(--color-action-orange)] mx-auto mb-3" />
                  <p className="text-3xl font-bold text-[var(--color-navy)] mb-1">24/7</p>
                  <p className="text-gray-600">Scheduling Available</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Aircraft Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aircraft.map((plane, index) => (
                <Card key={index} className="hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <Image
                        src={plane.image}
                        alt={plane.name}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-4 right-4 bg-[var(--color-action-orange)]">
                        {plane.type}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {plane.name}
                      </h3>
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{plane.seats} seats</span>
                        </div>
                        <Badge variant="outline" className="text-[var(--color-sky-blue)] border-[var(--color-sky-blue)]">
                          {plane.ideal}
                        </Badge>
                      </div>
                      <ul className="space-y-1 mb-4 text-sm text-gray-700">
                        {plane.features.map((feature, i) => (
                          <li key={i}>✓ {feature}</li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-2xl font-bold text-[var(--color-navy)]">{plane.rate}</span>
                        <span className="text-sm text-gray-600">wet rate</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Info */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Maintenance & Safety Standards
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-l-4 border-[var(--color-sky-blue)]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3">Regular Inspections</h3>
                    <p className="text-gray-700">
                      All aircraft undergo 50-hour, 100-hour, and annual inspections by our certified mechanics. 
                      We maintain detailed logs for complete transparency.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[var(--color-action-orange)]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3">Modern Avionics</h3>
                    <p className="text-gray-700">
                      Our fleet features modern glass cockpits and traditional instrumentation, 
                      preparing you for any aircraft you'll fly in your career.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[var(--color-action-orange)]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3">Parts & Upgrades</h3>
                    <p className="text-gray-700">
                      We use only certified parts and regularly upgrade avionics and safety equipment 
                      to maintain our high standards.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[var(--color-sky-blue)]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3">In-House Maintenance</h3>
                    <p className="text-gray-700">
                      Our on-site maintenance facility and A&P mechanics ensure quick turnaround 
                      and minimal schedule disruptions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-20 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-sky-blue)] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Ready to Fly Our Aircraft?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule your discovery flight or training lesson today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90 text-white font-bold text-lg px-8 py-6"
              >
                <Link href="/pilot-school/discovery-flight">Book Discovery Flight</Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="bg-white text-[var(--color-navy)] hover:bg-gray-100 font-bold text-lg px-8 py-6 border-white"
              >
                <Link href="/contact">Contact Flight School</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}