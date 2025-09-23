import { Instagram, Facebook, Linkedin } from "lucide-react"

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#D30046] to-[#B8003A] text-white pt-16 pb-12 mt-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-32 max-w-6xl mx-auto relative px-4 md:px-8 z-10">
        <div className="text-justify leading-loose">
          <h3 className="text-white text-lg font-bold mb-4 relative pb-1 after:block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:rounded after:bg-white">
            À propos
          </h3>
          <p className="text-sm mb-8 text-white/90">
            ArtConnect Maroc est une plateforme pour découvrir, publier et sauvegarder des œuvres et traditions
            marocaines, et connecter les passionnés d'art à travers le Maroc.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a
              href="#"
              className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 border border-white/20"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white group-hover:text-[#D30046] transition-colors duration-300" />
            </a>
            <a
              href="#"
              className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 border border-white/20"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white group-hover:text-[#D30046] transition-colors duration-300" />
            </a>
            <a
              href="#"
              className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 border border-white/20"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white group-hover:text-[#D30046] transition-colors duration-300" />
            </a>
          </div>
        </div>

        <div className="flex flex-col leading-loose md:justify-self-end">
          <h3 className="text-white text-lg font-bold mb-4 relative pb-1 after:block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:rounded after:bg-white">
            Liens utiles
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#"
                className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
              >
                Publier une œuvre
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
              >
                Favoris
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
              >
                À propos
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col leading-loose">
          <h3 className="text-white text-lg font-bold mb-4 relative pb-1 after:block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:rounded after:bg-white">
            Contact
          </h3>
          <p className="text-sm mb-2 text-white/90">
            Email :{" "}
            <a href="mailto:contact@artconnect.ma" className="text-white hover:underline transition-all duration-200">
              contact@artconnect.ma
            </a>
          </p>
          <p className="text-sm text-white/90">Téléphone : +212 6 12 34 56 78</p>
        </div>
      </div>

      <div className="border-t border-white/20 mt-12 pt-7 text-center relative z-10">
        <p className="text-white/90 text-sm font-medium">&copy; 2025 ArtConnect Maroc. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer
