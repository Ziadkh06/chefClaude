# 👨‍🍳 ChefClaude

A modern React web application that generates personalized recipes based on ingredients you provide. Powered by AI using the Mistral model through Hugging Face Inference API.

## ✨ Features

- **Add Ingredients** - Easily add ingredients to your list with a simple form
- **AI Recipe Generation** - Get creative recipe suggestions based on your selected ingredients
- **Clean UI** - Responsive and intuitive user interface built with React
- **Fast Setup** - Built with Vite for lightning-fast development and builds

## 🚀 Tech Stack

- **React** 19.2.8 - UI library
- **Vite** 8.2.0 - Build tool and dev server
- **Hugging Face Inference API** - AI-powered recipe generation using Mistral model
- **ESLint** - Code quality and consistency
- **React Compiler** - Optimized React compilation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- A **Hugging Face API key** (get one free at [huggingface.co](https://huggingface.co))

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/chefClaude.git
   cd chefClaude
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment variables**
   Create a `.env.local` file in the root directory:
   ```bash
   VITE_HF_API_KEY=your_hugging_face_api_key_here
   ```

## 🎯 Usage

### Development
Start the development server with hot module replacement:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Building for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Linting
Check code quality:
```bash
npm lint
```

## 📁 Project Structure

```
chefClaude/
├── src/
│   ├── components/
│   │   ├── ClaudeRecipe.jsx      # Display generated recipe
│   │   ├── Header.jsx             # App header
│   │   ├── IngredientsList.jsx     # List of ingredients
│   │   └── Main.jsx               # Main component & logic
│   ├── ai.js                      # AI integration with Hugging Face
│   ├── App.jsx                    # Root component
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── public/                        # Static assets
├── package.json
├── vite.config.js                # Vite configuration
└── eslint.config.js              # ESLint configuration
```

## 🔑 How It Works

1. User adds ingredients using the form
2. Click "Get Recipe" button to generate a recipe
3. The app sends the ingredients list to the Mistral AI model via Hugging Face API
4. The generated recipe is displayed in a formatted component

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the MIT License.

## 🎓 Learning

This project was built as part of the Scrimba "Learn React" course. It demonstrates:
- React hooks (useState, useEffect)
- Component composition
- Async/await API calls
- Environment variable handling
- Form submission with React
- React Server Components patterns

## 🐛 Troubleshooting

**API Key not working?**
- Verify your Hugging Face API key is correct
- Ensure the key is set in `.env.local`
- Check that your Hugging Face account has API access enabled

**Port 5173 already in use?**
- Change the port in `vite.config.js` or run: `npm run dev -- --port 3000`

## 📞 Support

For issues and questions, please open an GitHub issue or reach out to the maintainers.

---

**Happy Cooking! 🍽️**
