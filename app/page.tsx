"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Briefcase, Calendar, Gift, Heart, Sparkles, Star } from "lucide-react"
import { useState } from "react"

const occasions = [
  {
    id: "birthday",
    label: "Happy Birthday",
    icon: Gift,
    gradient: "from-pink-400 via-rose-400 to-red-400",
    bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
    borderColor: "border-pink-200 hover:border-pink-300",
  },
  {
    id: "christmas",
    label: "Merry Christmas",
    icon: Sparkles,
    gradient: "from-red-500 via-green-500 to-red-600",
    bgColor: "bg-gradient-to-br from-red-50 to-green-50",
    borderColor: "border-red-200 hover:border-red-300",
  },
  {
    id: "newyear",
    label: "Happy New Year",
    icon: Calendar,
    gradient: "from-blue-500 via-purple-500 to-indigo-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
    borderColor: "border-blue-200 hover:border-blue-300",
  },
  {
    id: "valentine",
    label: "Happy Valentine's Day",
    icon: Heart,
    gradient: "from-rose-400 via-pink-500 to-red-500",
    bgColor: "bg-gradient-to-br from-rose-50 to-pink-50",
    borderColor: "border-rose-200 hover:border-rose-300",
  },
  {
    id: "hired",
    label: "New Job",
    icon: Briefcase,
    gradient: "from-green-500 via-blue-500 to-indigo-600",
    bgColor: "bg-gradient-to-br from-green-50 to-blue-50",
    borderColor: "border-green-200 hover:border-green-300",
  }
]

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}
export default function GreetingCardGenerator({searchParams}: PageProps) {

  const [name, setName] = useState(searchParams?.name as string || "")
  const [selectedOccasion, setSelectedOccasion] = useState<string | null>(searchParams?.occasion as string || null)
  const [showGreeting, setShowGreeting] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleSubmit = () => {
    if (name && selectedOccasion) {
      setShowGreeting(true)
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 4000)
    }
  }

  const resetForm = () => {
    setShowGreeting(false)
    setName("")
    setSelectedOccasion(null)
  }

  const selectedOccasionData = occasions.find((occ) => occ.id === selectedOccasion)

  if (showGreeting && selectedOccasionData) {
    return (
      <div
        className={`min-h-screen bg-gradient-to-br ${selectedOccasionData.bgColor} flex items-center justify-center p-4 relative overflow-hidden`}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-24 h-24 bg-white/5 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-white/10 rounded-full blur-md animate-bounce"></div>
        </div>

        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              >
                <Star
                  className="w-4 h-4"
                  style={{
                    color: ["#f59e0b", "#ef4444", "#8b5cf6", "#10b981", "#3b82f6"][Math.floor(Math.random() * 5)],
                  }}
                />
              </div>
            ))}
          </div>
        )}

        <Card className="w-full max-w-3xl mx-auto shadow-2xl border-0 backdrop-blur-sm bg-white/90 animate-in fade-in-0 zoom-in-95 duration-700">
          <CardContent className="p-16 text-center relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${selectedOccasionData.gradient} opacity-5`}></div>

            <div className="relative z-10">
              <div className="mb-10">
                <div
                  className={`inline-flex p-6 rounded-full bg-gradient-to-br ${selectedOccasionData.gradient} shadow-lg mb-8`}
                >
                  <selectedOccasionData.icon className="w-16 h-16 text-white" />
                </div>
              </div>

              <h1
                className={`text-5xl font-black bg-gradient-to-r ${selectedOccasionData.gradient} bg-clip-text text-transparent mb-6 text-balance leading-tight`}
              >
                {selectedOccasionData.label}
              </h1>

              <div className="mb-10">
                <p className="text-4xl text-gray-700 mb-2 text-pretty font-light">Dear</p>
                <p
                  className={`text-5xl font-bold bg-gradient-to-r ${selectedOccasionData.gradient} bg-clip-text text-transparent text-pretty`}
                >
                  {name}!
                </p>
              </div>

              <div className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                {selectedOccasion === "birthday" && (
                  <p className="text-pretty font-medium">
                    ✨ Wishing you a day filled with happiness and a year filled with joy. May all your dreams come true
                    on this special day! 🎂
                  </p>
                )}
                {selectedOccasion === "christmas" && (
                  <p className="text-pretty font-medium">
                    🎄 May your Christmas sparkle with joy and laughter. Wishing you all the happiness your heart can
                    hold! ❄️
                  </p>
                )}
                {selectedOccasion === "newyear" && (
                  <p className="text-pretty font-medium">
                    🎊 Here's to new beginnings and fresh starts. May this new year bring you prosperity, health, and
                    happiness! 🥳
                  </p>
                )}
                {selectedOccasion === "valentine" && (
                  <p className="text-pretty font-medium">
                    💕 Sending you love and warm wishes on this special day. You deserve all the love and happiness in
                    the world! 💖
                  </p>
                )}
                {selectedOccasion === "hired" && (
                  <p className="text-pretty font-medium">
                    🎉 Congratulations on your new job! Corporate mothafucka! 🚀
                  </p>
                )}
              </div>

              <Button
                onClick={resetForm}
                className={`text-lg px-10 py-4 bg-gradient-to-r ${selectedOccasionData.gradient} hover:shadow-lg transform hover:scale-105 transition-all duration-300 border-0 text-white font-semibold`}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Create Another Card
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-gradient-to-r from-pink-200 to-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-green-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <Card className="w-full max-w-lg mx-auto shadow-2xl border-0 backdrop-blur-sm bg-white/80 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
        <CardContent className="p-10">
          <div className="text-center mb-10">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg mb-6">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 text-balance">
              Greeting Card Generator
            </h1>
            <p className="text-gray-600 text-pretty text-lg font-medium">
              Kung sino ka man pili ka nalang dito 🥳
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-3">
                Enter your name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your beautiful name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-lg py-4 px-4 border-2 border-gray-200 focus:border-purple-400 rounded-xl transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-4">Choose an occasion</label>
              <div className="grid grid-cols-2 gap-4">
                {occasions.map((occasion) => {
                  const Icon = occasion.icon
                  return (
                    <button
                      key={occasion.id}
                      onClick={() => setSelectedOccasion(occasion.id)}
                      className={`
                        p-6 rounded-2xl border-2 transition-all duration-300 text-left transform hover:scale-105 hover:shadow-lg
                        ${
                          selectedOccasion === occasion.id
                            ? `border-transparent bg-gradient-to-br ${occasion.gradient} text-white shadow-xl scale-105`
                            : `${occasion.bgColor} ${occasion.borderColor} hover:shadow-md`
                        }
                      `}
                    >
                      <Icon
                        className={`w-8 h-8 mb-3 ${selectedOccasion === occasion.id ? "text-white" : "text-gray-600"}`}
                      />
                      <div
                        className={`text-sm font-semibold ${selectedOccasion === occasion.id ? "text-white" : "text-gray-700"}`}
                      >
                        {occasion.label}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={!name || !selectedOccasion}
              className="w-full text-lg py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-300 disabled:to-gray-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 font-semibold"
            >
              ✨ Generate Greeting Card ✨
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
