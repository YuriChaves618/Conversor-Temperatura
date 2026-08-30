# 🌡️ Conversor de Temperatura

Aplicação React para converter temperaturas entre **Celsius**, **Fahrenheit** e **Kelvin**, com uma interface inspirada em painéis de instrumentos de laboratório.

## Como funciona

1. Informe a temperatura desejada.
2. Escolha a escala de origem.
3. Escolha a escala de destino.
4. O resultado aparece automaticamente na tela.

## Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- CSS puro (sem frameworks)

## Rodando o projeto localmente

```bash
# clone o repositório
git clone https://github.com/YuriChaves618/Conversor-Temperatura.git

# entre na pasta do projeto
cd seu-repositorio

# instale as dependências
npm install

# inicie o servidor de desenvolvimento
npm run dev
```

### O projeto ficará disponível em `http://localhost:5173`.
---

## Fórmulas utilizadas

| De → Para              | Fórmula                     |
|-------------------------|------------------------------|
| Kelvin → Celsius        | `K - 273.15`                 |
| Kelvin → Fahrenheit     | `(K - 273.15) × 1.8 + 32`    |
| Celsius → Kelvin        | `C + 273.15`                 |
| Celsius → Fahrenheit    | `C × 1.8 + 32`                |
| Fahrenheit → Celsius    | `(F - 32) / 1.8`              |
| Fahrenheit → Kelvin     | `(F + 459.67) × 5/9`          |

## Licença

Este projeto é livre para uso e modificação.
