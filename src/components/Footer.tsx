import React from 'react';
import { Sun, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#home" className="flex items-center space-x-3 mb-6">
              <img 
                src="input_file_0.png" 
                alt="Power Solar Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="text-2xl font-black tracking-tight text-white italic">
                Power<span className="text-brand-green">Solar</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Solutions innovantes d'énergie solaire et technologies agricoles durables. Par TASSIGUI BONI SACCA.
            </p>
            <div className="flex space-x-4">
              <SocialIcon Icon={Facebook} href="https://www.facebook.com/share/18n3M81WUC/?mibextid=wwXIfr" />
              <SocialIcon Icon={Twitter} href="#" />
              <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/company/power-solar022/" />
              <SocialIcon Icon={Instagram} href="#" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><FooterLink href="#services">Installation PV</FooterLink></li>
              <li><FooterLink href="#services">Séchoirs Solaires</FooterLink></li>
              <li><FooterLink href="#services">Zones Rurales</FooterLink></li>
              <li><FooterLink href="#services">Maintenance</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Entreprise</h4>
            <ul className="space-y-4 text-sm">
              <li><FooterLink href="#about">À Propos</FooterLink></li>
              <li><FooterLink href="#projects">Réalisations</FooterLink></li>
              <li><FooterLink href="#">Partenaires</FooterLink></li>
              <li><FooterLink href="#contact">Contact</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-xs mb-4">Recevez nos dernières actualités et conseils sur le solaire.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-brand-green w-full"
              />
              <button className="bg-brand-green text-white p-2 rounded-lg hover:bg-brand-green-dark transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Power Solar Africa. Tous droits réservés.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ Icon, href }: { Icon: any; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-green hover:text-white transition-all">
      <Icon className="w-5 h-5" />
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="hover:text-brand-green transition-colors flex items-center gap-2">
      <span className="w-1 h-1 bg-brand-yellow rounded-full"></span>
      {children}
    </a>
  );
}
