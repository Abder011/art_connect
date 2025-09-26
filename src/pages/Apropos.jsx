import Footer from "../components/Footer"

export default function APropos() {
  const features = [
    {
      title: "Explorer les créations",
      description:
        "Découvrez peintures, artisanat, architecture, gastronomie et habits traditionnels par région ou style",
      color: "bg-pink-100 border-pink-200",
    },
    {
      title: "Participer aux événements",
      description: "Suivez et participez à des événements culturels pour vivre l'art marocain en direct",
      color: "bg-orange-100 border-orange-200",
    },
    {
      title: "Sauvegarder vos favoris",
      description: "Ajoutez vos œuvres et traditions préférées à vos favoris pour les retrouver facilement",
      color: "bg-yellow-100 border-yellow-200",
    },
  ]

  const values = [
    {
      title: "Explorer les créations",
      description: "Respecter et valoriser l'héritage culturel marocain.",
      color: "bg-pink-100",
    },
    {
      title: "Innovation",
      description: "Encourager de nouvelles créations et formes artistiques.",
      color: "bg-orange-100",
    },
    {
      title: "Communauté",
      description: "Créer un espace où artistes et amateurs partagent leurs passions.",
      color: "bg-yellow-100",
    },
  ]

  return (
    <div className="bg-[#fff7f5] min-h-screen">
      {/* Header */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">À propos d'ArtConnect Maroc</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">Préserver et célébrer l'art et la culture marocaine</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-12">
        {/* Notre mission */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#D30046] mb-6">Notre mission</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>ArtConnect Maroc a pour objectif de promouvoir et préserver l'art et la culture marocaine.</p>
            <p>
              Nous connectons artistes, artisans et passionnés de culture à travers le royaume pour partager et célébrer
              la richesse du patrimoine marocain.
            </p>
          </div>
        </section>

        {/* Ce que vous pouvez faire */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#D30046] mb-8">Ce que vous pouvez faire</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${feature.color}`}>
                <h3 className="font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Notre histoire */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#D30046] mb-6">Notre histoire</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Depuis sa création en 2025, ArtConnect Maroc a recensé plus de{" "}
              <span className="font-bold text-[#D30046]">200 traditions et œuvres</span> à travers le pays.
            </p>
            <p>
              La plateforme vise à mettre en lumière les talents locaux et à transmettre le savoir-faire marocain aux
              nouvelles générations.
            </p>
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-[#D30046] mb-8">Nos valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className={`p-6 rounded-xl ${value.color}`}>
                <h3 className="font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
