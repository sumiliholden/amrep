import Head from 'next/head'
import Link from 'next/link'

//components
import GuestLayout from '@/components/Layouts/Guest/Layout'
import Footer from '@/components/Layouts/Guest/Footer'
import { Button, ClientImage, Image, Rating, Grid } from '@/components/UI'
import {
    HeroContainer,
    HeroContent,
    HeroTitle,
    HeroImage,
    HeroDescription,
} from '@/components/Hero'
import {
    CardContainer,
    CardBody,
    CardTitle,
    CardDescription,
    CardActions,
} from '@/components/Card'
export default function Home() {
    

    return (
        <GuestLayout>
        
            <div className='text-base-content'>
                <div className="p-4 lg:p-10">
                    <HeroContainer>
                        <HeroContent>
                            <HeroImage src="https://picsum.photos/id/1005/600/600" />
                            <div>
                                <HeroTitle
                                    title="Meet the World’s #1 Real Estate Photo Editing
                                Team"
                                />
                                <HeroDescription description="Thousands of companies - from startups to publicly traded corporations use Phixer’s software and real estate designers to create beautiful marketing to sell their properties for more." />
                                <Button>Try For Free</Button>
                            </div>
                        </HeroContent>
                    </HeroContainer>

                    <div className="p-20 lg:p-20 ">
                        <div className="w-full flex flex-center flex-wrap mx-auto">
                            <ClientImage src="https://enboarder.com/wp-content/uploads/2019/07/urban-compass.png" />
                            <ClientImage src="https://enboarder.com/wp-content/uploads/2019/07/urban-compass.png" />
                            <ClientImage src="https://enboarder.com/wp-content/uploads/2019/07/urban-compass.png" />
                            <ClientImage src="https://enboarder.com/wp-content/uploads/2019/07/urban-compass.png" />
                            <ClientImage src="https://enboarder.com/wp-content/uploads/2019/07/urban-compass.png" />
                            <ClientImage src="https://enboarder.com/wp-content/uploads/2019/07/urban-compass.png" />
                            <ClientImage src="https://enboarder.com/wp-content/uploads/2019/07/urban-compass.png" />
                            <ClientImage src="https://enboarder.com/wp-content/uploads/2019/07/urban-compass.png" />
                        </div>
                    </div>
                    <HeroContainer>
                        <HeroContent>
                            <div className="ml-10">
                                <HeroTitle title="See what people say about Phixer" />
                                <HeroDescription description="At Phixer we take service seriously. We have been ranked the best in class for customer support for three years in a row, but don't take our word for it; check our reviews yourself!" />
                                <div className="m-7">
                                    <Rating /> -{' '}
                                    <span>Redfin - 634 reviews </span>
                                </div>
                                <div className="m-7">
                                    <Rating /> -{' '}
                                    <span>Google - 39 reviews </span>
                                </div>
                                <div className="m-7">
                                    <Rating /> -{' '}
                                    <span>Facebook - 43 reviews </span>
                                </div>
                            </div>
                            <CardContainer>
                                <figure>
                                    <Image src="https://picsum.photos/id/1005/400/250" />
                                </figure>

                                <CardBody>
                                    <CardTitle title="Farrell Desselle, Redfin" />
                                    <CardDescription description="They are awesome! All of our amazing Listing pictures are done by them! All of my clients love how the pictures turn out and the amazing technology to be able to feel like your right there walking through a Listing. I highly recommend them for all of your listings!" />
                                    <CardActions>
                                        <Button>Get Started</Button>
                                    </CardActions>
                                </CardBody>
                            </CardContainer>
                        </HeroContent>
                    </HeroContainer>
                    <div class="text-center ">
                        <h1 class="mb-5 text-6xl font-bold">
                            Bring your real estate photos to a new level
                        </h1>
                        <div>
                            <h1 class="mb-5 text-6x-l">
                                Phixer partners with professional photographers,
                                real estate agents, and property owners to
                                produce amazing photos and videos. Capture
                                photos with our iPhone application or your DSLR
                                and we will do our magic!
                            </h1>
                        </div>

                        <div class="max-w-md"></div>
                    </div>
                    <HeroContainer className="text-base-content">
                        <HeroContent>
                            <HeroImage src="https://picsum.photos/id/1005/600/600" />
                            <div>
                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <CardTitle title="Highly skilled and experienced photo editors" />
                                        <CardDescription description="We have spent over a decade training photographers and designers specifically for the real estate industry. Leverage our highly specialized editors on your next project." />
                                    </div>
                                    <div>
                                        <CardTitle title="Quality assurance guarantees consistency" />
                                        <CardDescription description="Every photo that is edited through Phixer undergoes a meticulous quality assurance process. We have multiple quality gates and measurable KPI’s to deliver consistency and on-time delivery." />
                                    </div>
                                    <div>
                                        <CardTitle title="Fast turnaround" />
                                        <CardDescription description="Our software allows for ultra-fast turnaround times. Delivery of photos is as fast as 8-hours and revisions are within 1-hour." />
                                    </div>
                                    <div>
                                        <CardTitle title="Ultra-Fast Uploads" />
                                        <CardDescription description="Amazon accelerated servers allow for up to 5X faster uploads and downloads to our software. Save time and frustration utilizing our world- class software." />
                                    </div>
                                </div>
                            </div>
                        </HeroContent>
                    </HeroContainer>
                    <HeroContainer>
                        <HeroContent>
                            <div className="ml-10">
                                <HeroTitle title="See what people say about Phixer" />
                                <HeroDescription description="At Phixer we take service seriously. We have been ranked the best in class for customer support for three years in a row, but don't take our word for it; check our reviews yourself!" />
                                <div className="m-7">
                                    <Rating /> -{' '}
                                    <span>Redfin - 634 reviews </span>
                                </div>
                                <div className="m-7">
                                    <Rating /> -{' '}
                                    <span>Google - 39 reviews </span>
                                </div>
                                <div className="m-7">
                                    <Rating /> -{' '}
                                    <span>Facebook - 43 reviews </span>
                                </div>
                            </div>
                            <CardContainer>
                                <figure>
                                    <Image src="https://picsum.photos/id/1005/400/250" />
                                </figure>

                                <CardBody>
                                    <CardTitle title="Farrell Desselle, Redfin" />
                                    <CardDescription description="They are awesome! All of our amazing Listing pictures are done by them! All of my clients love how the pictures turn out and the amazing technology to be able to feel like your right there walking through a Listing. I highly recommend them for all of your listings!" />
                                    <CardActions>
                                        <Button>Get Started</Button>
                                    </CardActions>
                                </CardBody>
                            </CardContainer>
                        </HeroContent>
                    </HeroContainer>
                </div>

                <Footer />
            </div>
        </GuestLayout>
    )
}
