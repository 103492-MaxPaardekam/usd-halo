import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface RouteMeta {
  title: string;
  description: string;
}

const DEFAULT_META: RouteMeta = {
  title: "USD Halo",
  description:
    "USD Halo is a reward-powered digital dollar built for passive earnings and seamless access to DeFi.",
};

const ROUTE_META: Record<string, RouteMeta> = {
  "/": {
    title: "Your Wealth Works",
    description:
      "An automated, reward-powered digital dollar built for native passive earnings and effortless connection into DeFi.",
  },
  "/network": {
    title: "Network",
    description:
      "Explore the decentralized USD Halo network across chains, protocols, and strategies.",
  },
  "/ecosystem": {
    title: "Ecosystem",
    description:
      "Discover the wallets, protocols, and infrastructure integrations that power USD Halo.",
  },
  "/rewards": {
    title: "Rewards",
    description:
      "See how USD Halo delivers automatic reward accrual with full liquidity and no lockups.",
  },
  "/help": {
    title: "Help Center",
    description:
      "Find setup guidance, wallet help, and product answers for USD Halo.",
  },
  "/news": {
    title: "News",
    description:
      "Read the latest product updates, launches, and announcements from USD Halo.",
  },
  "/wallet": {
    title: "Wallet",
    description:
      "Manage your USD Halo balance and review wallet-focused product actions.",
  },
  "/about": {
    title: "About",
    description:
      "Learn the mission, principles, and product direction behind USD Halo.",
  },
  "/join": {
    title: "Join",
    description:
      "Join the USD Halo community and sign up for launch, rewards, and governance updates.",
  },
  "/commerce": {
    title: "Commerce",
    description:
      "Explore how merchants and platforms can integrate USD Halo into commerce flows.",
  },
};

function setMetaTag(selector: string, content: string) {
  const tag = document.querySelector<HTMLMetaElement>(selector);
  if (tag) {
    tag.setAttribute("content", content);
  }
}

export function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const routeMeta = ROUTE_META[pathname] ?? DEFAULT_META;
    const fullTitle = `${routeMeta.title} | Halo`;

    document.title = fullTitle;
    setMetaTag('meta[name="description"]', routeMeta.description);
    setMetaTag('meta[property="og:title"]', fullTitle);
    setMetaTag('meta[property="og:description"]', routeMeta.description);
    setMetaTag('meta[name="twitter:title"]', fullTitle);
    setMetaTag('meta[name="twitter:description"]', routeMeta.description);
  }, [pathname]);

  return null;
}
