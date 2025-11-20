const BibleVerse = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5 m-0 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative line above */}
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          
          {/* Bible Verse */}
          <blockquote className="mb-6">
            <p className="font-script text-3xl md:text-4xl lg:text-5xl text-primary leading-relaxed mb-4">
              "Alegrei-me quando me disseram: Vamos à Casa do Senhor!"
            </p>
          </blockquote>
          
          {/* Reference */}
          <p className="font-body text-base md:text-lg text-muted-foreground italic">
            Salmos 122:1
          </p>
          
          {/* Decorative line below */}
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default BibleVerse;

