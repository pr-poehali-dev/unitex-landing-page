import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/e4e2abe9-6999-4f3a-8261-771a6d81d3dc/files/7e695e35-8fa9-4d1f-9e18-c7828708120f.jpg';

const PHONE = '+7 (495) 123-45-67';
const PHONE_TEL = '+74951234567';

const nav = [
  { id: 'about', label: 'О компании' },
  { id: 'services', label: 'Услуги' },
  { id: 'products', label: 'Продукция' },
  { id: 'logistics', label: 'Автотранспорт и нефтебазы' },
  { id: 'contacts', label: 'Контакты' },
];

const services = [
  {
    icon: 'ShoppingCart',
    title: 'Закупка нефтепродуктов',
    text: 'Прямые поставки от производителей. Прозрачные цены и контроль качества на каждом этапе.',
  },
  {
    icon: 'TrendingUp',
    title: 'Реализация и трейдинг',
    text: 'Оптовая реализация нефтепродуктов и углеводородного сырья по всей России.',
  },
  {
    icon: 'Truck',
    title: 'Перевозка',
    text: 'Собственный автопарк бензовозов для доставки топлива точно в срок.',
  },
  {
    icon: 'Warehouse',
    title: 'Хранение и перевалка',
    text: 'Разгрузочные и перевалочные нефтебазы с современным оборудованием.',
  },
];

const products = [
  { name: 'Дизельное топливо', spec: 'ЕВРО-5, летнее / зимнее' },
  { name: 'Бензин АИ-92 / АИ-95', spec: 'Соответствие ГОСТ' },
  { name: 'Мазут топочный', spec: 'М-100, М-40' },
  { name: 'Печное топливо', spec: 'Тёмное / светлое' },
  { name: 'Битум нефтяной', spec: 'Дорожный, строительный' },
  { name: 'Углеводородное сырьё', spec: 'Газовый конденсат, нефть' },
];

const stats = [
  { value: '15+', label: 'лет на рынке' },
  { value: '50+', label: 'единиц автотранспорта' },
  { value: '4', label: 'собственные нефтебазы' },
  { value: '24/7', label: 'отгрузка и логистика' },
];

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2">
    <span className="w-8 h-px bg-primary" />
    <span className="text-xs uppercase tracking-widest text-primary">{children}</span>
  </div>
);

const Index = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo('top')} className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-sm bg-primary flex items-center justify-center">
              <Icon name="Fuel" size={20} className="text-primary-foreground" />
            </div>
            <span className="font-display text-2xl font-bold tracking-wider uppercase">Юнитэк</span>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
              >
                {n.label}
              </button>
            ))}
          </nav>

          <a href={`tel:${PHONE_TEL}`} className="hidden sm:block">
            <Button className="font-display uppercase tracking-wider gap-2">
              <Icon name="Phone" size={16} />
              Позвонить
            </Button>
          </a>

          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            <Icon name={open ? 'X' : 'Menu'} size={26} />
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-left text-muted-foreground hover:text-primary uppercase tracking-wide text-sm"
              >
                {n.label}
              </button>
            ))}
            <a href={`tel:${PHONE_TEL}`}>
              <Button className="w-full font-display uppercase gap-2">
                <Icon name="Phone" size={16} /> Позвонить
              </Button>
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Нефтебаза" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-primary/40 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-primary">
                Нефтепродукты · Углеводородное сырьё
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] uppercase tracking-tight">
              Энергия,<br />
              на которую<br />
              <span className="text-primary">можно положиться</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Закупка и реализация нефтепродуктов с собственным автотранспортом,
              разгрузочными и перевалочными нефтебазами по всей России.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href={`tel:${PHONE_TEL}`}>
                <Button size="lg" className="font-display uppercase tracking-wider gap-2 w-full sm:w-auto">
                  <Icon name="Phone" size={18} />
                  Позвонить нам
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo('products')}
                className="font-display uppercase tracking-wider gap-2 border-border"
              >
                Продукция
                <Icon name="ArrowRight" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="container grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
          {stats.map((s) => (
            <div key={s.label} className="py-10 px-4 text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-primary">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>О компании</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mt-4 leading-tight">
              Надёжный партнёр<br />на топливном рынке
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              «Юнитэк» — компания, специализирующаяся на закупке и реализации нефтепродуктов
              и углеводородного сырья. Мы выстраиваем прямые поставки, контролируем качество
              и обеспечиваем стабильные объёмы для бизнеса любого масштаба.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Собственный автотранспорт, разгрузочные и перевалочные нефтебазы позволяют нам
              контролировать всю цепочку — от закупки до доставки конечному потребителю.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {['Прямые поставки', 'Контроль качества', 'Своя логистика', 'Точно в срок'].map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <Icon name="CircleCheck" size={20} className="text-primary shrink-0" />
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={HERO_IMG}
              alt="Нефтеперерабатывающий комплекс"
              className="rounded-sm w-full h-[480px] object-cover border border-border"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-sm hidden md:block">
              <div className="font-display text-3xl font-bold">100%</div>
              <div className="text-sm uppercase tracking-wide">контроль цепочки</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-card border-y border-border">
        <div className="container">
          <SectionLabel>Услуги</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mt-4">
            Что мы делаем
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group p-7 rounded-sm border border-border bg-background hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Icon
                    name={s.icon}
                    size={24}
                    className="text-primary group-hover:text-primary-foreground transition-colors"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold uppercase mt-5">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 container">
        <SectionLabel>Продукция</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mt-4">
          Наш ассортимент
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {products.map((p, i) => (
            <div
              key={p.name}
              className="bg-card p-8 hover:bg-secondary transition-colors group"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-5xl font-bold text-border group-hover:text-primary transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Icon name="Droplet" size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold uppercase mt-6">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.spec}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Logistics */}
      <section id="logistics" className="py-24 bg-card border-y border-border">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            {[
              { icon: 'Truck', t: 'Бензовозы', d: 'Собственный автопарк' },
              { icon: 'Container', t: 'Резервуары', d: 'Хранение топлива' },
              { icon: 'Warehouse', t: 'Разгрузочные базы', d: 'Приём сырья' },
              { icon: 'ArrowRightLeft', t: 'Перевалочные базы', d: 'Логистика и отгрузка' },
            ].map((x) => (
              <div key={x.t} className="p-6 rounded-sm border border-border bg-background">
                <Icon name={x.icon} size={28} className="text-primary" />
                <div className="font-display text-lg font-semibold uppercase mt-4">{x.t}</div>
                <div className="text-xs text-muted-foreground mt-1">{x.d}</div>
              </div>
            ))}
          </div>
          <div className="order-1 lg:order-2">
            <SectionLabel>Инфраструктура</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mt-4 leading-tight">
              Автотранспорт<br />и нефтебазы
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Мы располагаем собственным автотранспортом для перевозки нефтепродуктов,
              а также разгрузочными и перевалочными нефтебазами. Это позволяет гарантировать
              сохранность груза, точные сроки и полный контроль логистики.
            </p>
            <a href={`tel:${PHONE_TEL}`} className="inline-block mt-8">
              <Button size="lg" className="font-display uppercase tracking-wider gap-2">
                <Icon name="Phone" size={18} />
                Обсудить поставку
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24 container">
        <SectionLabel>Контакты</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mt-4">
          Связаться с нами
        </h2>
        <div className="mt-12 grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {[
              { icon: 'Phone', label: 'Телефон', value: PHONE, href: `tel:${PHONE_TEL}` },
              { icon: 'Mail', label: 'Email', value: 'info@unitek.ru', href: 'mailto:info@unitek.ru' },
              { icon: 'MapPin', label: 'Месторасположение', value: 'г. Москва, ул. Промышленная, д. 10, офис 305', href: '' },
              { icon: 'Clock', label: 'Режим работы', value: 'Пн–Пт 9:00–18:00 · Отгрузка 24/7', href: '' },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4 p-5 rounded-sm border border-border bg-card">
                <div className="w-11 h-11 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon name={c.icon} size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="font-display text-lg font-semibold hover:text-primary transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <div className="font-display text-lg font-semibold">{c.value}</div>
                  )}
                </div>
              </div>
            ))}
            <a href={`tel:${PHONE_TEL}`} className="block">
              <Button size="lg" className="w-full font-display uppercase tracking-wider gap-2">
                <Icon name="Phone" size={18} />
                Позвонить сейчас
              </Button>
            </a>
          </div>

          <div className="rounded-sm overflow-hidden border border-border min-h-[400px]">
            <iframe
              title="Месторасположение Юнитэк"
              src="https://yandex.ru/map-widget/v1/?ll=37.617700%2C55.755800&z=12"
              className="w-full h-full min-h-[400px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-sm bg-primary flex items-center justify-center">
              <Icon name="Fuel" size={20} className="text-primary-foreground" />
            </div>
            <span className="font-display text-2xl font-bold tracking-wider uppercase">Юнитэк</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Юнитэк. Закупка и реализация нефтепродуктов.
          </p>
          <a href={`tel:${PHONE_TEL}`} className="text-sm text-primary font-display uppercase tracking-wide">
            {PHONE}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
