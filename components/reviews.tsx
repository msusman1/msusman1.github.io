"use client"

import {useState} from "react"
import Image from "next/image"
import {motion} from "framer-motion"
import {Quote} from "lucide-react"
import {Card, CardContent} from "@/components/ui/card"

type Review = {
    name: string
    role: string
    company: string
    quote: string
    image?: string
}

const reviews: Review[] = [
    {
        name: "Jen Rossey",
        role: "Founder, CTO",
        company: "Lopos",
        image:
            "https://media.licdn.com/dms/image/v2/C4D03AQHsKO1KSMTBvw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516557778958?e=1793232000&v=beta&t=r0eh_gQDARP_apgGcS0CFoxmLar3xlGEu5wde6u3wMM",
        quote:
            "I had the pleasure of working with Muhammad Usman on the development of our Android and iOS app, and I cannot recommend him highly enough. His ability to deliver high-quality work on time was impressive, and his smooth communication throughout the project made the entire process seamless. Muhammad isn't afraid to take initiative and proactively address challenges, which made a real difference in keeping the project on track. His expertise in mobile app development and commitment to delivering excellent results make him a valuable asset.",
    },
    {
        name: "Abou Nkya",
        role: "Founder, CEO",
        company: "HashTech (T) ltd",
        image:
            "https://media.licdn.com/dms/image/v2/D4D03AQF8RZTqgcjGaw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699994950586?e=1793232000&v=beta&t=z8DGcz5Mf4b5SvBBtSsDAX_WHfFvW5EhQ1sxaM_TYK4",
        quote:
            "I've had the pleasure of working with Muhammad, an outstanding Senior Android Developer. His discipline and commitment are second to none, consistently delivering high-quality work on time. Muhammad's technical skills, problem-solving ability, and proactive approach make him a reliable and valuable team member. I highly recommend him for any project requiring expertise in Android development.",
    },
    {
        name: "Andrew Beatty",
        role: "PResident",
        company: "Singular Inversions.",
        image:
            "https://media.licdn.com/dms/image/v2/C4E03AQHyF2j8hjrlGQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1617830946368?e=1793232000&v=beta&t=T1MXU0OPNyWXprfqopp-pkOiVqX96MbTw2k28HwHTb8",
        quote:
            "Muhammad is an excellent app developer, his commitment and communication skills are excellent. He is polite, patient and goes beyond his way to consult, advise and implement the best practices. I would recommend anyone to hire Muhammad. My job was completed within the shortest time possible. Amazing work ethics and job well done.",
    },

    {
        name: "Bekzod Rakhmatov",
        role: "CEO",
        company: "ZBEKZ GROUP.",
        image:
            "https://media.licdn.com/dms/image/v2/D4D03AQEAYZimJ8U-xg/profile-displayphoto-crop_800_800/B4DZttM.aYH8AI-/0/1767063679154?e=1793232000&v=beta&t=eSMSml9qyEJ9RQtft1qPM1a0urM_kfAVwOy-teGZtYk",
        quote:
            "Muhammad did a great job with my Firebase functions. I will definitely work with him gain.",
    },
    {
        name: "Krish Talluri",
        role: "Principal & Chief Architect",
        company: "Talsk Research Inc.",
        image:
            "https://media.licdn.com/dms/image/v2/D4D03AQHNAreX1elyFw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1663823046931?e=1793232000&v=beta&t=VVUrFgkbCN7t7Ul-QNx4zNDEYcBDmAnolZqEGvqNQA4",
        quote:
            "Muhammad is at this point an expert in android application development. He is spot on I can not insist on how talented he is. No task is beyond his capabilities. Hire this guy and you will thank me later.",
    },
    {
        name: "Brian Einhaus",
        role: "Founder",
        company: "Watchmode.",
        image:
            "https://media.licdn.com/dms/image/v2/D5603AQHA11yKTkk-rw/profile-displayphoto-shrink_800_800/B56ZX5bjLOGQAc-/0/1743646503979?e=1793232000&v=beta&t=2wwK9mXYhs0NSE4PJIuJpWQfpm3v0Nqyh_i-Ohragvc",
        quote:
            "Great experience. Muhammad is a true Android pro, communication was great, would absolutely hire again",
    },
    {
        name: "Meir Itzinger",
        role: "Asset Manager",
        company: "UP REALTY LLC.",
        quote:
            "Muhammad demonstrated an exceptional capability to grasp the needs of our project and achieve an incredibly fast turnaround - this was a fairly complex job, and he had it done in a matter of a few hours from when we first spoke. I will definitely be working with him again on more projects. Highly recommended!",
    },
    {
        name: "Jen Rossey",
        role: "CEO",
        company: "Lopos Inc",
        image:
            "https://media.licdn.com/dms/image/v2/C4D03AQHsKO1KSMTBvw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516557778958?e=1793232000&v=beta&t=r0eh_gQDARP_apgGcS0CFoxmLar3xlGEu5wde6u3wMM",
        quote:
            "I am very happy with the work of Muhammad. He was proactive and the quality and speed was top notch.",
    },
    {
        name: "Stephen",
        role: "Support Manager",
        company: "Adhoc Support",
        quote:
            "Muhammad did a great job meeting my project requirements and was very easy to work with. I will definitely seek out Muhammad for future projects.",
    },
    {
        name: "Kaj Caspersen",
        role: "Founder, CEO",
        company: "AI Stories",
        quote:
            "Muhammad is clearly an expert in his field. He communicates efficiently and solves problems fast. After working with Muhammad I would definitely like to hire him again.",
    },
]

function ReviewerAvatar({review}: { review: Review }) {
    const [imageFailed, setImageFailed] = useState(false)
    const initials = review.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)

    if (!review.image || imageFailed) {
        return (
            <div
                aria-label={`${review.name} avatar`}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
            >
                {initials}
            </div>
        )
    }

    return (
        <Image
            src={review.image}
            alt={`${review.name} profile photo`}
            width={48}
            height={48}
            unoptimized
            onError={() => setImageFailed(true)}
            className="h-12 w-12 shrink-0 rounded-full border border-border/60 object-cover"
        />
    )
}

export default function Reviews() {
    return (
        <section id="reviews" className="py-16 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
                <motion.div
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5}}
                >
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Client Reviews</h2>
                        <p className="mx-auto max-w-[720px] text-muted-foreground text-base sm:text-lg">
                            Feedback from founders, executives, and teams who relied on my product engineering and
                            mobile app delivery.
                        </p>
                    </div>
                </motion.div>

                <div className="mx-auto max-w-6xl py-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {reviews.map((review, index) => (
                        <motion.article
                            key={`${review.name}-${review.company}-${index}`}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.4, delay: index * 0.04}}
                        >
                            <Card
                                className="h-full border-border/70 bg-card/80 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
                                <CardContent className="p-6 flex h-full flex-col">
                                    <div className="mb-4 flex items-center justify-between">
                                        <div
                                            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <Quote className="h-5 w-5"/>
                                        </div>
                                        <div
                                            className="text-xs font-medium tracking-[0.2em] text-primary/80 uppercase">Review
                                        </div>
                                    </div>

                                    <p className="flex-1 text-sm leading-7 text-foreground/90">“{review.quote}”</p>

                                    <div className="mt-6 border-t border-border/50 pt-4">
                                        <div className="flex items-center gap-3">
                                            <ReviewerAvatar review={review}/>
                                            <div>
                                                <div className="font-semibold text-foreground">{review.name}</div>
                                                <div className="text-sm text-primary">{review.role}</div>
                                                <div className="text-xs text-muted-foreground">{review.company}</div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
