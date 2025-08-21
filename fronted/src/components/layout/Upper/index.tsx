import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { BadgeCheck, Heart, Percent, Rocket, Star } from 'lucide-react';
import '@splidejs/react-splide/css';
import { Link } from '@tanstack/react-router';

export default function Upper() {
    const infos = [
        { icon: Star, label: "Limited time offer", to: "/" },
        { icon: Percent, label: "Limited time offer", to: "/" },
        { icon: Rocket, label: "Limited time offer", to: "/" },
        { icon: Heart, label: "Limited time offer", to: "/" },
        { icon: BadgeCheck, label: "Limited time offer", to: "/" }
    ];
    return (
        <Splide
            options={{
                type: "loop",
                drag: "free",
                focus: "center",
                perPage: 1,
                arrows: false,
                pagination: false,
                autoScroll: {
                    speed: 1
                }
            }}
            extensions={{ AutoScroll }}
            className="flex items-center justify-center w-full h-10 bg-linear-65 from-primary to-secondary"
        >
            {infos.map(({ icon: Icon, label, to }, i) => (
                <SplideSlide key={i}>
                    <Link to={to}>
                        <div className="flex items-center justify-center gap-2 text-sm text-white font-bold">
                            <Icon className="size-4 stroke-3" /><p className="text-nowrap">{label}</p>
                        </div>
                    </Link>
                </SplideSlide>
            ))}
        </Splide>
    )
}