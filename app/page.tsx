export default function Home() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <header className="bg-gradient-to-l from-[#1a1f3a] via-[#2a3f5a] to-[#1a1f3a] text-white shadow-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] font-rubik">
              אויף שימחעס
            </h1>
            <nav className="hidden md:flex gap-8 font-assistant">
              <a href="#" className="hover:text-[#d4af37] transition-all hover:scale-110 font-medium text-lg">דף הבית</a>
              <a href="#gallery" className="hover:text-[#d4af37] transition-all hover:scale-110 font-medium text-lg">גלריה</a>
              <a href="#about" className="hover:text-[#d4af37] transition-all hover:scale-110 font-medium text-lg">אודות</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f1419] via-[#1a1f3a] to-[#2a3f5a] text-white py-32 md:py-40 overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920')] bg-cover bg-center opacity-10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#d4af37] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#f4d03f] rounded-full opacity-10 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-block px-6 py-3 bg-[#d4af37]/20 backdrop-blur-sm rounded-full border border-[#d4af37]/30">
              <span className="text-[#d4af37] font-bold font-rubik text-lg">מערכת עיצוב מודעות מתקדמת</span>
            </div>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-tight font-rubik">
            <span className="text-white">
              מודעות והזמנות
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37]">
              ברמה שלא ראיתם
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl mb-12 text-slate-300 max-w-4xl mx-auto leading-relaxed font-assistant font-light">
            צור מודעות מקצועיות ומרהיבות תוך דקות - <span className="font-bold text-white">עם עריכה בזמן אמת והורדה מיידית</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] text-[#1a1f3a] font-black text-xl px-12 py-5 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 font-rubik">
              התחל לעצב עכשיו
              <span className="mr-3">←</span>
            </button>
            <button className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-xl px-12 py-5 rounded-full hover:bg-white/20 transition-all duration-300 font-rubik">
              צפה בדוגמאות
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="gallery" className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6">
            <div className="inline-block px-6 py-2 bg-[#d4af37]/10 rounded-full mb-6">
              <span className="text-[#d4af37] font-bold font-rubik">הקטגוריות שלנו</span>
            </div>
          </div>
          
          <h3 className="text-5xl md:text-7xl font-black text-center mb-6 font-rubik bg-gradient-to-r from-[#1a1f3a] to-[#d4af37] bg-clip-text text-transparent">
            בחר את סוג האירוע
          </h3>
          <p className="text-center text-slate-600 text-xl md:text-2xl mb-20 font-assistant max-w-3xl mx-auto">
            מגוון רחב של עיצובים מקצועיים, מעוצבים בקפידה על ידי מעצבים מובילים
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Bar/Bat Mitzvah */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1609168159878-baa6f5a49c80?w=800" 
                  alt="בר/בת מצווה"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                  <h4 className="text-3xl font-black text-white mb-2 font-rubik drop-shadow-lg">בר/בת מצווה</h4>
                  <p className="text-white/90 font-assistant text-sm">עיצובים מיוחדים לשמחה גדולה</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-4 font-assistant leading-relaxed">
                  מודעות והזמנות מרהיבות לאירוע המיוחד - עם אפשרות להתאמה אישית מלאה
                </p>
                <button className="text-[#d4af37] font-bold hover:text-[#c4a027] transition-all font-rubik text-lg group-hover:translate-x-2 inline-flex items-center">
                  <span>צפה בתבניות</span>
                  <span className="mr-2">←</span>
                </button>
              </div>
            </div>

            {/* Weddings */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-200/30 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800" 
                  alt="חתונות"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                  <h4 className="text-3xl font-black text-white mb-2 font-rubik drop-shadow-lg">חתונות</h4>
                  <p className="text-white/90 font-assistant text-sm">הזמנות יוקרתיות ומרגשות</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-4 font-assistant leading-relaxed">
                  הזמנות אלגנטיות ומעוצבות לאירוע הכי חשוב בחיים - כל פרט מושלם
                </p>
                <button className="text-rose-600 font-bold hover:text-rose-700 transition-all font-rubik text-lg group-hover:translate-x-2 inline-flex items-center">
                  <span>צפה בתבניות</span>
                  <span className="mr-2">←</span>
                </button>
              </div>
            </div>

            {/* Synagogue Events */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1609168159878-baa6f5a49c80?w=800" 
                  alt="אירועי בית כנסת"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                  <h4 className="text-3xl font-black text-white mb-2 font-rubik drop-shadow-lg">אירועי בית כנסת</h4>
                  <p className="text-white/90 font-assistant text-sm">מודעות מכובדות ומסורתיות</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-4 font-assistant leading-relaxed">
                  מודעות לקידוש, שלום זכור, הכנסת ס"ת - בעיצוב מכובד ומקצועי
                </p>
                <button className="text-slate-700 font-bold hover:text-slate-900 transition-all font-rubik text-lg group-hover:translate-x-2 inline-flex items-center">
                  <span>צפה בתבניות</span>
                  <span className="mr-2">←</span>
                </button>
              </div>
            </div>

            {/* General Events */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800" 
                  alt="אירועים כלליים"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                  <h4 className="text-3xl font-black text-white mb-2 font-rubik drop-shadow-lg">אירועים כלליים</h4>
                  <p className="text-white/90 font-assistant text-sm">לכל חגיגה ואירוע</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-4 font-assistant leading-relaxed">
                  יום הולדת, אירועי חברה, מסיבות - עיצובים צבעוניים ומקוריים
                </p>
                <button className="text-purple-600 font-bold hover:text-purple-700 transition-all font-rubik text-lg group-hover:translate-x-2 inline-flex items-center">
                  <span>צפה בתבניות</span>
                  <span className="mr-2">←</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6">
            <div className="inline-block px-6 py-2 bg-[#d4af37]/10 rounded-full mb-6">
              <span className="text-[#d4af37] font-bold font-rubik">היתרונות שלנו</span>
            </div>
          </div>
          
          <h3 className="text-5xl md:text-7xl font-black text-center mb-20 font-rubik bg-gradient-to-r from-[#1a1f3a] to-[#d4af37] bg-clip-text text-transparent">
            למה לבחור באויף שימחעס?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative w-28 h-28 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37] to-[#f4d03f] rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="relative w-full h-full bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <svg className="w-14 h-14 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-3xl font-black text-[#1a1f3a] mb-4 font-rubik">מהיר וקל</h4>
              <p className="text-slate-600 text-lg font-assistant leading-relaxed">
                תוך דקות בודדות תקבל מודעה מקצועית ומעוצבת - ללא צורך בידע גרפי
              </p>
            </div>

            <div className="text-center group">
              <div className="relative w-28 h-28 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37] to-[#f4d03f] rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="relative w-full h-full bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <svg className="w-14 h-14 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
              </div>
              <h4 className="text-3xl font-black text-[#1a1f3a] mb-4 font-rubik">עיצובים מקצועיים</h4>
              <p className="text-slate-600 text-lg font-assistant leading-relaxed">
                כל התבניות עוצבו על ידי מעצבים מקצועיים - תוצאות ברמה הגבוהה ביותר
              </p>
            </div>

            <div className="text-center group">
              <div className="relative w-28 h-28 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37] to-[#f4d03f] rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="relative w-full h-full bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <svg className="w-14 h-14 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>
              <h4 className="text-3xl font-black text-[#1a1f3a] mb-4 font-rubik">התאמה אישית מלאה</h4>
              <p className="text-slate-600 text-lg font-assistant leading-relaxed">
                שנה טקסטים, צבעים ופרטים בזמן אמת - התבנית תתאים בדיוק לאירוע שלך
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#0f1419] via-[#1a1f3a] to-[#2a3f5a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464047736614-af63643285bf?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f4d03f] rounded-full opacity-10 blur-3xl"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-5xl md:text-7xl font-black mb-8 font-rubik">
            מוכנים ליצור משהו מדהים?
          </h3>
          <p className="text-2xl md:text-3xl mb-12 text-slate-300 font-assistant max-w-3xl mx-auto">
            הצטרף לאלפי לקוחות מרוצים שכבר יצרו את המודעות המושלמות שלהם
          </p>
          <button className="group relative bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] text-[#1a1f3a] font-black text-2xl px-16 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 font-rubik">
            התחל עכשיו - זה חינם!
            <span className="mr-3">←</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1419] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h4 className="text-4xl font-black mb-4 font-rubik bg-gradient-to-r from-[#d4af37] to-[#f4d03f] bg-clip-text text-transparent">
                אויף שימחעס
              </h4>
              <p className="text-slate-400 font-assistant leading-relaxed text-lg mb-6">
                המקום שלך ליצירת מודעות והזמנות מקצועיות לכל אירוע ושמחה - בקלות, במהירות, ובאיכות מעולה
              </p>
            </div>
            
            <div>
              <h5 className="font-black text-xl mb-6 font-rubik text-[#d4af37]">קישורים מהירים</h5>
              <ul className="space-y-3 text-slate-400 font-assistant text-lg">
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">דף הבית</a></li>
                <li><a href="#gallery" className="hover:text-[#d4af37] transition-colors">גלריה</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">תמחור</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">צור קשר</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-black text-xl mb-6 font-rubik text-[#d4af37]">יצירת קשר</h5>
              <ul className="space-y-3 text-slate-400 font-assistant text-lg">
                <li>info@oifsimches.com</li>
                <li>03-1234567</li>
                <li>ראשון-חמישי: 9:00-18:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-500 font-assistant">© 2025 אויף שימחעס - כל הזכויות שמורות</p>
          </div>
        </div>
      </footer>
    </div>
  );
}