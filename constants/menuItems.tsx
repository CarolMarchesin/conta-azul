interface MenuItem {
  label: string;
  href?: string;
  fields?: MenuItem[];
}

export const menuData: MenuItem[] = [
  {
    label: "Funcionalidades",
    fields: [
      { label: "Sistema de Gestão de Vendas e Clientes" },
      { label: "Controle de compras e fornecedores" },
      { label: "Relatórios" },
      { label: "Emissão de Nota Fiscal" },
      { label: "Estoque e produtos" },
      { label: "CA de Bolso" },
      { label: "Cobrança Automática" },
      { label: "Conciliação bancária" },
      { label: "Conexão com o contador" },
      { label: "Controle de Contratos Recorrentes" },
      { label: "Gestão financeira" },
    ],
  },
  {
    label: "Segmentos",
    fields: [
      { label: "Agências de Publicidade e Marketing" },
      { label: "Escritórios de Advocacia" },
      { label: "Corretoras de Seguros" },
      { label: "Clínicas de Saúde" },
      { label: "Empresas de Cursos e Treinamentos" },
      { label: "Empresas de Software" },
      { label: "Empresas de Consultoria" },
      { label: "Empresas de Manutenções" },
      { label: "ONGs e Associaçõs" },
      { label: "Escritórios de Engenharia" },
      { label: "Empresas Elétricas e Hidráulicas" },
    ],
  },
  {
    label: "Planos",
    href: "/planos",
  },
  {
    label: "Parceiros",
    fields: [
      { label: "Contadores" },
      { label: "BPO Financeiro" },
      { label: "Integração Domínio" },
      { label: "Cadastro" },
      {
        label: "Eventos",
        fields: [
          { label: "Formação de Hérois" },
          { label: "TroCA Contábil" },
          { label: "Conta Azul Con" },
          { label: "Encontro com Parceiro" },
          { label: "Contador" },
        ],
      },
    ],
  },
];
