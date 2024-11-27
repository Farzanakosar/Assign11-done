import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Menu } from "lucide-react"

function Header() {
  return (
    <header className="w-full h-14 flex justify-between items-center bg-black text-white">
    
    <div>
        <h1 className="text-2xl font-bold pl-5">MY APP</h1>
    </div>

    <ul className="hidden md:block">
        <li className="space-x-8 pr-4">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About Us</Link>
            <Link href={"/"}>Contact Us</Link>          
        </li>          
    </ul>      
    <Sheet>      
                <SheetTrigger className="text-xl md:hidden">
                <Menu/>
                </SheetTrigger>
                <SheetContent>
                <SheetHeader>
                <SheetTitle>Farzana Kosar</SheetTitle>
                <SheetDescription>
        <ul>
            <li className="flex flex-col gap-y-4 items-center">
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>About Us</Link>
                <Link href={"/"}>Contact Us</Link>
                
                
            </li>
            
        </ul>
                </SheetDescription>
                </SheetHeader>
                </SheetContent>
                </Sheet>
    </header>
  )
}

export default Header