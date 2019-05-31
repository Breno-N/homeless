SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Banco de Dados: `homeless`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `acoes`
--

CREATE TABLE IF NOT EXISTS `acoes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Extraindo dados da tabela `acoes`
--

INSERT INTO `acoes` (`id`, `nome`, `ativo`) VALUES
(1, 'comida', 1),
(2, 'cobertor', 1),
(3, 'onde dormir', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `pessoas_procura`
--

CREATE TABLE IF NOT EXISTS `pessoas_procura` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `telefone` varchar(15) DEFAULT NULL,
  `whatsapp` varchar(15) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data_atualizacao` datetime DEFAULT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Extraindo dados da tabela `pessoas_procura`
--

INSERT INTO `pessoas_procura` (`id`, `nome`, `telefone`, `whatsapp`, `email`, `data_cadastro`, `data_atualizacao`, `ativo`) VALUES
(1, 'pudim1', '(41)95555-5555', '(41)94444-4444', 'pudim1@pudim1.com.br', '2019-05-31 15:52:57', NULL, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `pessoas_procuradas`
--

CREATE TABLE IF NOT EXISTS `pessoas_procuradas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pessoa_procura` int(11) DEFAULT NULL,
  `nome` varchar(200) NOT NULL,
  `idade` int(11) NOT NULL,
  `morava_em` varchar(500) DEFAULT NULL,
  `ultima_vez_visto_em` varchar(500) NOT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data_atualizacao` datetime DEFAULT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Extraindo dados da tabela `pessoas_procuradas`
--

INSERT INTO `pessoas_procuradas` (`id`, `id_pessoa_procura`, `nome`, `idade`, `morava_em`, `ultima_vez_visto_em`, `data_cadastro`, `data_atualizacao`, `ativo`) VALUES
(1, 1, 'Teste 1', 22, 'Pinhais', 'guadalupe', '2019-05-31 15:52:57', NULL, 1),
(2, NULL, 'Teste 2', 30, 'Curitiba', 'centro', '2019-05-31 15:53:25', NULL, 1),
(3, NULL, 'Teste 3', 28, 'Uberaba', 'centro', '2019-05-31 15:54:03', '2019-05-31 15:55:15', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `pessoas_procuradas_acoes`
--

CREATE TABLE IF NOT EXISTS `pessoas_procuradas_acoes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pessoa_procurada` int(11) NOT NULL,
  `id_acao` int(11) NOT NULL,
  `visto_em` varchar(500) DEFAULT NULL,
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Extraindo dados da tabela `pessoas_procuradas_acoes`
--

INSERT INTO `pessoas_procuradas_acoes` (`id`, `id_pessoa_procurada`, `id_acao`, `visto_em`, `data`) VALUES
(1, 1, 1, 'guadalupe', '2019-05-31 15:52:57'),
(2, 1, 3, 'guadalupe', '2019-05-31 15:52:57'),
(3, 2, 3, 'centro', '2019-05-31 15:53:25'),
(4, 3, 2, 'carmo', '2019-05-31 15:54:49'),
(5, 3, 1, 'centro', '2019-05-31 15:55:15'),
(6, 3, 3, 'centro', '2019-05-31 15:55:15');