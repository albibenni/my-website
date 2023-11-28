
import Contact from '@/components/Contact';
import StarsCanvas from '@/components/canvas/StarsCanvas';
export default function Home() {
    return(
        <div className="relative z-0">
            <Contact />
            <StarsCanvas />
        </div>
     )
}