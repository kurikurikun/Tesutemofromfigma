import { motion } from 'motion/react';
import { MessageCircle, Heart, TrendingUp } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: MessageCircle,
      title: 'リアルな体験談',
      description: '実際にその道を歩んだ人の生の声を聞くことができます',
    },
    {
      icon: Heart,
      title: '納得感のある選択',
      description: '数字やデータだけでは分からない、本当の姿を知ることができます',
    },
    {
      icon: TrendingUp,
      title: '未来への一歩',
      description: '正しい情報をもとに、自信を持って次のステップへ進めます',
    },
  ];

  return (
    null
  );
}