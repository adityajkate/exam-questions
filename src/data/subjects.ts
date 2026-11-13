import { Subject } from '../types';

export const subjects: Subject[] = [
  {
    "slug": "dl",
    "code": "DL",
    "name": "Deep Learning",
    "examDate": "17 Nov 2026, Tuesday",
    "examDateISO": "2026-11-17T10:30:00+05:30",
    "order": 1,
    "description": "Fundamentals of neural networks, training & optimization, autoencoders, CNNs, RNNs/LSTMs, and GANs.",
    "status": "available",
    "units": [
      {
        "number": 1,
        "title": "UNIT 1 - Fundamentals of Neural Network",
        "questions5": [
          {
            "id": "dl-u1-5m-1",
            "number": 1,
            "text": "Design AND gate using Perceptron",
            "cleanText": "Design AND gate using Perceptron",
            "marks": 5,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u1-5m-2",
            "number": 2,
            "text": "What are Feed Forward Neural Network?",
            "cleanText": "What are Feed Forward Neural Network?",
            "marks": 5,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u1-5m-3",
            "number": 3,
            "text": "Comment on the Representation Power of DNNs",
            "cleanText": "Comment on the Representation Power of DNNs",
            "marks": 5,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u1-5m-4",
            "number": 4,
            "text": "Explain basic architecture of feedforward neural network",
            "cleanText": "Explain basic architecture of feedforward neural network",
            "marks": 5,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u1-5m-5",
            "number": 5,
            "text": "Explain types of neural network",
            "cleanText": "Explain types of neural network",
            "marks": 5,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u1-5m-6",
            "number": 6,
            "text": "Discuss the role of gradient descent in neural network learning",
            "cleanText": "Discuss the role of gradient descent in neural network learning",
            "marks": 5,
            "years": [
              "May 2026"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u1-5m-7",
            "number": 7,
            "text": "Discuss the working of Feed Forward and Recurrent Neural Networks",
            "cleanText": "Discuss the working of Feed Forward and Recurrent Neural Networks",
            "marks": 5,
            "years": [
              "May 2026"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "dl-u1-10m-1",
            "number": 1,
            "text": "What are the Three Classes of Deep Learning, explain each?",
            "cleanText": "What are the Three Classes of Deep Learning, explain each?",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u1-10m-2",
            "number": 2,
            "text": "What are the three classes of Deep Learning? Explain each",
            "cleanText": "What are the three classes of Deep Learning? Explain each",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u1-10m-3",
            "number": 3,
            "text": "Explain the key components of an ANN",
            "cleanText": "Explain the key components of an ANN",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u1-10m-4",
            "number": 4,
            "text": "Explain the architecture and working of a Feed Forward Neural Network with a neat diagram. Discuss the functions of input, hidden, and output layers",
            "cleanText": "Explain the architecture and working of a Feed Forward Neural Network with a neat diagram. Discuss the functions of input, hidden, and output layers",
            "marks": 10,
            "years": [
              "May 2026"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u1-10m-5",
            "number": 5,
            "text": "Compare CNN, RNN, and DNN architectures in terms of data types handled, structure, and applications",
            "cleanText": "Compare CNN, RNN, and DNN architectures in terms of data types handled, structure, and applications",
            "marks": 10,
            "years": [
              "May 2026"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 12
      },
      {
        "number": 2,
        "title": "UNIT 2 - Training, Optimization and Regularization of Deep Neural Network",
        "questions5": [
          {
            "id": "dl-u2-5m-1",
            "number": 1,
            "text": "Suppose we have $N$ input-output pairs. Our goal is to find the parameters that predict the output $y$ from the input $x$ according to some function $y = x^w$. Calculate the sum-of-squared error function $E$ between predictions $y$ and inputs $x$. The parameter $w$ can be determined iteratively using gradient descent. For the calculated error function $E$, derive the gradient descent update rule $w \\leftarrow w - \\eta \\dfrac{\\partial E}{\\partial w}$.",
            "cleanText": "Suppose we have $N$ input-output pairs. Our goal is to find the parameters that predict the output $y$ from the input $x$ according to some function $y = x^w$. Calculate the sum-of-squared error function $E$ between predictions $y$ and inputs $x$. The parameter $w$ can be determined iteratively using gradient descent. For the calculated error function $E$, derive the gradient descent update rule $w \\leftarrow w - \\eta \\dfrac{\\partial E}{\\partial w}$.",
            "marks": 5,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-5m-2",
            "number": 2,
            "text": "Explain dropout. How does it solve the problem of overfitting?",
            "cleanText": "Explain dropout. How does it solve the problem of overfitting?",
            "marks": 5,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-5m-3",
            "number": 3,
            "text": "Explain Gradient Descent in Deep Learning",
            "cleanText": "Explain Gradient Descent in Deep Learning",
            "marks": 5,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-5m-4",
            "number": 4,
            "text": "Explain the dropout method and it’s advantages",
            "cleanText": "Explain the dropout method and it’s advantages",
            "marks": 5,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-5m-5",
            "number": 5,
            "text": "Explain Gradient Descending Deep Learning",
            "cleanText": "Explain Gradient Descending Deep Learning",
            "marks": 5,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-5m-6",
            "number": 6,
            "text": "What is the significance of Activation Function? Explain any three of them",
            "cleanText": "What is the significance of Activation Function? Explain any three of them",
            "marks": 5,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-5m-7",
            "number": 7,
            "text": "Explain regularization in neural network",
            "cleanText": "Explain regularization in neural network",
            "marks": 5,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-5m-8",
            "number": 8,
            "text": "Explain the concept of overfitting and under fitting in neural network",
            "cleanText": "Explain the concept of overfitting and under fitting in neural network",
            "marks": 5,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-5m-9",
            "number": 9,
            "text": "Explain the major factors influencing the learning efficiency of a deep neural network",
            "cleanText": "Explain the major factors influencing the learning efficiency of a deep neural network",
            "marks": 5,
            "years": [
              "May 2026"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-5m-10",
            "number": 10,
            "text": "Describe the importance of activation functions in deep learning models",
            "cleanText": "Describe the importance of activation functions in deep learning models",
            "marks": 5,
            "years": [
              "May 2026"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-5m-11",
            "number": 11,
            "text": "Explain how MSE measures prediction error in regression models",
            "cleanText": "Explain how MSE measures prediction error in regression models",
            "marks": 5,
            "years": [
              "May 2026"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "dl-u2-10m-1",
            "number": 1,
            "text": "What is an activation function? Describe any four activation functions",
            "cleanText": "What is an activation function? Describe any four activation functions",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-10m-2",
            "number": 2,
            "text": "Explain early stopping, batch normalization, and data augmentation",
            "cleanText": "Explain early stopping, batch normalization, and data augmentation",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-10m-3",
            "number": 3,
            "text": "Explain Stochastic Gradient Descent and momentum based gradient descent optimization techniques",
            "cleanText": "Explain Stochastic Gradient Descent and momentum based gradient descent optimization techniques",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-10m-4",
            "number": 4,
            "text": "What are the different types of Gradient Descent methods, explain any three of them",
            "cleanText": "What are the different types of Gradient Descent methods, explain any three of them",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-10m-5",
            "number": 5,
            "text": "What are L1 and L2 regularization methods?",
            "cleanText": "What are L1 and L2 regularization methods?",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-10m-6",
            "number": 6,
            "text": "What is the significance of Activation Functions in Neural Networks, explain different types Activation functions used in NN",
            "cleanText": "What is the significance of Activation Functions in Neural Networks, explain different types Activation functions used in NN",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-10m-7",
            "number": 7,
            "text": "What are the different types of Gradient Descent methods? Explain any three of them",
            "cleanText": "What are the different types of Gradient Descent methods? Explain any three of them",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-10m-8",
            "number": 8,
            "text": "Comment on the significance of Loss functions and explain different types of Loss functions while training a network",
            "cleanText": "Comment on the significance of Loss functions and explain different types of Loss functions while training a network",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-10m-9",
            "number": 9,
            "text": "What is the significance of Activation Functions in neural networks? Explain different types Activation functions used in DNN",
            "cleanText": "What is the significance of Activation Functions in neural networks? Explain different types Activation functions used in DNN",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-10m-10",
            "number": 10,
            "text": "Explain the gradient descent algorithm used in neural network. Also discuss types of gradient descent in detail",
            "cleanText": "Explain the gradient descent algorithm used in neural network. Also discuss types of gradient descent in detail",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-10m-11",
            "number": 11,
            "text": "Discuss the role of a loss function in training a neural network. Compare Mean Squared Error (MSE) and Cross-Entropy Loss in terms of their usage, characteristics, and impact on model performance. In which scenarios would using Cross-Entropy Loss be more appropriate than MSE?",
            "cleanText": "Discuss the role of a loss function in training a neural network. Compare Mean Squared Error (MSE) and Cross-Entropy Loss in terms of their usage, characteristics, and impact on model performance. In which scenarios would using Cross-Entropy Loss be more appropriate than MSE?",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-10m-12",
            "number": 12,
            "text": "Explain the learning process in a neural network. How does a neural network update its weights during training? Describe the role of forward propagation, loss calculation, and backpropagation in this learning process",
            "cleanText": "Explain the learning process in a neural network. How does a neural network update its weights during training? Describe the role of forward propagation, loss calculation, and backpropagation in this learning process",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-10m-13",
            "number": 13,
            "text": "What is the significance of Activation Functions in Neural Networks, explain different types Activation functions used in NN",
            "cleanText": "What is the significance of Activation Functions in Neural Networks, explain different types Activation functions used in NN",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-10m-14",
            "number": 14,
            "text": "Explain the need for regularization in deep neural networks. Discuss various regularization techniques used to reduce overfitting",
            "cleanText": "Explain the need for regularization in deep neural networks. Discuss various regularization techniques used to reduce overfitting",
            "marks": 10,
            "years": [
              "May 2026"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u2-10m-15",
            "number": 15,
            "text": "Identify the problem when a deep learning model achieves high training accuracy but low validation accuracy. Suggest suitable solutions",
            "cleanText": "Identify the problem when a deep learning model achieves high training accuracy but low validation accuracy. Suggest suitable solutions",
            "marks": 10,
            "years": [
              "May 2026"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 26
      },
      {
        "number": 3,
        "title": "UNIT 3 - Autoencoders: Unsupervised Learning",
        "questions5": [
          {
            "id": "dl-u3-5m-1",
            "number": 1,
            "text": "Explain denoising auto encoder model",
            "cleanText": "Explain denoising auto encoder model",
            "marks": 5,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u3-5m-2",
            "number": 2,
            "text": "What are Undercomplete Autoencoders?",
            "cleanText": "What are Undercomplete Autoencoders?",
            "marks": 5,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u3-5m-3",
            "number": 3,
            "text": "What are Denoising Autoencoders?",
            "cleanText": "What are Denoising Autoencoders?",
            "marks": 5,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "dl-u3-10m-1",
            "number": 1,
            "text": "Explain main components of an Autoencoder and it’s architecture",
            "cleanText": "Explain main components of an Autoencoder and it’s architecture",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u3-10m-2",
            "number": 2,
            "text": "Explain any three types of Autoencoders",
            "cleanText": "Explain any three types of Autoencoders",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u3-10m-3",
            "number": 3,
            "text": "Explain any three types of Autoencoders",
            "cleanText": "Explain any three types of Autoencoders",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u3-10m-4",
            "number": 4,
            "text": "Explain the working of auto encoders. Also discuss type of auto encoders in detail",
            "cleanText": "Explain the working of auto encoders. Also discuss type of auto encoders in detail",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 7
      },
      {
        "number": 4,
        "title": "UNIT 4 - Convolutional Neural Networks (CNN): Supervised Learning",
        "questions5": [
          {
            "id": "dl-u4-5m-1",
            "number": 1,
            "text": "Explain Pooling operation in CNN",
            "cleanText": "Explain Pooling operation in CNN",
            "marks": 5,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u4-5m-2",
            "number": 2,
            "text": "Explain Pooling operation in CNN",
            "cleanText": "Explain Pooling operation in CNN",
            "marks": 5,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u4-5m-3",
            "number": 3,
            "text": "Explain basic working of CNN",
            "cleanText": "Explain basic working of CNN",
            "marks": 5,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "dl-u4-10m-1",
            "number": 1,
            "text": "Explain CNN architecture in detail. Suppose, we have input volume of 32x32x3 for a layer in CNN and there are ten 5x5 filters with stride 1 and pad 2; calculate the number of parameters in this layer of CNN",
            "cleanText": "Explain CNN architecture in detail. Suppose, we have input volume of 32x32x3 for a layer in CNN and there are ten 5x5 filters with stride 1 and pad 2; calculate the number of parameters in this layer of CNN",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u4-10m-2",
            "number": 2,
            "text": "Describe LeNET architecture",
            "cleanText": "Describe LeNET architecture",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u4-10m-3",
            "number": 3,
            "text": "Explain the architecture of CNN with the help of a diagram",
            "cleanText": "Explain the architecture of CNN with the help of a diagram",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u4-10m-4",
            "number": 4,
            "text": "Explain and analyze the architecture of AlexNet Neural Network",
            "cleanText": "Explain and analyze the architecture of AlexNet Neural Network",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u4-10m-5",
            "number": 5,
            "text": "Differentiate between the architecture of CNN and GAN network (also listed under Unit 6)",
            "cleanText": "Differentiate between the architecture of CNN and GAN network (also listed under Unit 6)",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u4-10m-6",
            "number": 6,
            "text": "Consider a Convolutional layer with the following configuration: The input to the layer has 12 channels and a spatial size of 32x32. The convolutional layer has 32 filters (kernels), each of size 5x5, with a stride of 1 and no padding. Each filter is applied to every channel of the input. Calculate the total number of parameters (weights) in this convolutional layer",
            "cleanText": "Consider a Convolutional layer with the following configuration: The input to the layer has 12 channels and a spatial size of 32x32. The convolutional layer has 32 filters (kernels), each of size 5x5, with a stride of 1 and no padding. Each filter is applied to every channel of the input. Calculate the total number of parameters (weights) in this convolutional layer",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u4-10m-7",
            "number": 7,
            "text": "Draw and explain any two modern deep learning architectures",
            "cleanText": "Draw and explain any two modern deep learning architectures",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u4-10m-8",
            "number": 8,
            "text": "Explain the complete workflow of a Convolutional Neural Network with a neat diagram and suitable example",
            "cleanText": "Explain the complete workflow of a Convolutional Neural Network with a neat diagram and suitable example",
            "marks": 10,
            "years": [
              "May 2026"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u4-10m-9",
            "number": 9,
            "text": "Explain the architecture of AlexNet with a diagram. Explain the significance of ReLU activation and Dropout regularization in AlexNet",
            "cleanText": "Explain the architecture of AlexNet with a diagram. Explain the significance of ReLU activation and Dropout regularization in AlexNet",
            "marks": 10,
            "years": [
              "May 2026"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 12
      },
      {
        "number": 5,
        "title": "UNIT 5 - Recurrent Neural Networks (RNN)",
        "questions5": [
          {
            "id": "dl-u5-5m-1",
            "number": 1,
            "text": "Describe sequence learning problem",
            "cleanText": "Describe sequence learning problem",
            "marks": 5,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "dl-u5-10m-1",
            "number": 1,
            "text": "Explain Gated Recurrent Unit in detail",
            "cleanText": "Explain Gated Recurrent Unit in detail",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u5-10m-2",
            "number": 2,
            "text": "Explain RNN architecture in detail",
            "cleanText": "Explain RNN architecture in detail",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u5-10m-3",
            "number": 3,
            "text": "Explain LSTM architecture",
            "cleanText": "Explain LSTM architecture",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u5-10m-4",
            "number": 4,
            "text": "Explain vanishing and exploding gradient in RNNs",
            "cleanText": "Explain vanishing and exploding gradient in RNNs",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u5-10m-5",
            "number": 5,
            "text": "Explain LSTM model, how it overcomes the limitation of RNN",
            "cleanText": "Explain LSTM model, how it overcomes the limitation of RNN",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u5-10m-6",
            "number": 6,
            "text": "Differentiate between the LSTM and GRU network",
            "cleanText": "Differentiate between the LSTM and GRU network",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u5-10m-7",
            "number": 7,
            "text": "Explain the working of RNN with the help of suitable diagram",
            "cleanText": "Explain the working of RNN with the help of suitable diagram",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u5-10m-8",
            "number": 8,
            "text": "Explain how Recurrent Neural Networks (RNNs) are suited for sequential data. Compare standard RNN with LSTM in terms of their ability to handle long-term dependencies. Justify your reasoning",
            "cleanText": "Explain how Recurrent Neural Networks (RNNs) are suited for sequential data. Compare standard RNN with LSTM in terms of their ability to handle long-term dependencies. Justify your reasoning",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u5-10m-9",
            "number": 9,
            "text": "Compare the performance of LSTM and GRU on long-sequence datasets. Which one would you choose for faster training and why?",
            "cleanText": "Compare the performance of LSTM and GRU on long-sequence datasets. Which one would you choose for faster training and why?",
            "marks": 10,
            "years": [
              "May 2026"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u5-10m-10",
            "number": 10,
            "text": "Describe the architecture and training mechanism of RNN using BPTT in detail",
            "cleanText": "Describe the architecture and training mechanism of RNN using BPTT in detail",
            "marks": 10,
            "years": [
              "May 2026"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 11
      },
      {
        "number": 6,
        "title": "UNIT 6 - Recent Trends and Applications",
        "questions5": [],
        "questions10": [
          {
            "id": "dl-u6-10m-1",
            "number": 1,
            "text": "Explain the working of Generative Adversarial Network",
            "cleanText": "Explain the working of Generative Adversarial Network",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u6-10m-2",
            "number": 2,
            "text": "What are the issues faced by Vanilla GAN models?",
            "cleanText": "What are the issues faced by Vanilla GAN models?",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u6-10m-3",
            "number": 3,
            "text": "What are Generative Adversarial Networks, comment on it’s applications",
            "cleanText": "What are Generative Adversarial Networks, comment on it’s applications",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u6-10m-4",
            "number": 4,
            "text": "Differentiate between the architecture of CNN and GAN network (also listed under Unit 4)",
            "cleanText": "Differentiate between the architecture of CNN and GAN network (also listed under Unit 4)",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u6-10m-5",
            "number": 5,
            "text": "Explain Generative Adversarial networks Architecture and its application",
            "cleanText": "Explain Generative Adversarial networks Architecture and its application",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u6-10m-6",
            "number": 6,
            "text": "Explain architecture of GAN in detail. Also comment on applications of GAN",
            "cleanText": "Explain architecture of GAN in detail. Also comment on applications of GAN",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u6-10m-7",
            "number": 7,
            "text": "Explain the architecture and working principle of a Generative Adversarial Network with a labelled diagram",
            "cleanText": "Explain the architecture and working principle of a Generative Adversarial Network with a labelled diagram",
            "marks": 10,
            "years": [
              "May 2026"
            ],
            "hasDiagram": false
          },
          {
            "id": "dl-u6-10m-8",
            "number": 8,
            "text": "Analyze the applications of GANs in image generation and image-to-image translation for improving training efficiency",
            "cleanText": "Analyze the applications of GANs in image generation and image-to-image translation for improving training efficiency",
            "marks": 10,
            "years": [
              "May 2026"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 8
      }
    ],
    "total5M": 25,
    "total10M": 51,
    "totalQuestions": 76
  },
  {
    "slug": "bda",
    "code": "BDA",
    "name": "Big Data Analytics",
    "examDate": "19 Nov 2026, Thursday",
    "examDateISO": "2026-11-19T10:30:00+05:30",
    "order": 2,
    "description": "Hadoop & HDFS, MapReduce pipeline, NoSQL database patterns, stream query mining, CURE clustering, and recommendation engines.",
    "status": "available",
    "units": [
      {
        "number": 1,
        "title": "UNIT 1 - Introduction to Big Data & Hadoop",
        "questions5": [
          {
            "id": "bda-u1-5m-1",
            "number": 1,
            "text": "What is Hadoop and Why it Matters",
            "cleanText": "What is Hadoop and Why it Matters",
            "marks": 5,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u1-5m-2",
            "number": 2,
            "text": "Compare traditional database and big data",
            "cleanText": "Compare traditional database and big data",
            "marks": 5,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u1-5m-3",
            "number": 3,
            "text": "Big Data and its characteristics (short note)",
            "cleanText": "Big Data and its characteristics (short note)",
            "marks": 5,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u1-5m-4",
            "number": 4,
            "text": "Explain 5 V’s of big data",
            "cleanText": "Explain 5 V’s of big data",
            "marks": 5,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u1-5m-5",
            "number": 5,
            "text": "Compare traditional data and big data",
            "cleanText": "Compare traditional data and big data",
            "marks": 5,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u1-5m-6",
            "number": 6,
            "text": "Explain CAP. How is CAP different from ACID property in databases?",
            "cleanText": "Explain CAP. How is CAP different from ACID property in databases?",
            "marks": 5,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "bda-u1-10m-1",
            "number": 1,
            "text": "Draw Hadoop Ecosystem and briefly explain its components",
            "cleanText": "Draw Hadoop Ecosystem and briefly explain its components",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u1-10m-2",
            "number": 2,
            "text": "Explain architecture of Big data and give characteristics of it",
            "cleanText": "Explain architecture of Big data and give characteristics of it",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u1-10m-3",
            "number": 3,
            "text": "Explain big data enabling technologies",
            "cleanText": "Explain big data enabling technologies",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u1-10m-4",
            "number": 4,
            "text": "Explain Hadoop Architectural Model with both components in detail",
            "cleanText": "Explain Hadoop Architectural Model with both components in detail",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u1-10m-5",
            "number": 5,
            "text": "Draw Hadoop Ecosystem and briefly explain its components",
            "cleanText": "Draw Hadoop Ecosystem and briefly explain its components",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u1-10m-6",
            "number": 6,
            "text": "Draw a diagram of the typical Hadoop Ecosystem and explain any two components of it.",
            "cleanText": "Draw a diagram of the typical Hadoop Ecosystem and explain any two components of it.",
            "marks": 10,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u1-10m-7",
            "number": 7,
            "text": "Explain Hadoop Ecosystem in detail",
            "cleanText": "Explain Hadoop Ecosystem in detail",
            "marks": 10,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u1-10m-8",
            "number": 8,
            "text": "Mention four characteristics of big data. Elaborate these characteristics with respect to social media websites",
            "cleanText": "Mention four characteristics of big data. Elaborate these characteristics with respect to social media websites",
            "marks": 10,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 14
      },
      {
        "number": 2,
        "title": "UNIT 2 - Hadoop HDFS and Map Reduce",
        "questions5": [
          {
            "id": "bda-u2-5m-1",
            "number": 1,
            "text": "The Map and Reduce Tasks (short note)",
            "cleanText": "The Map and Reduce Tasks (short note)",
            "marks": 5,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u2-5m-2",
            "number": 2,
            "text": "Write the limitations of Hadoop",
            "cleanText": "Write the limitations of Hadoop",
            "marks": 5,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u2-5m-3",
            "number": 3,
            "text": "Explain how failures are handled in Map Reduce job",
            "cleanText": "Explain how failures are handled in Map Reduce job",
            "marks": 5,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u2-5m-4",
            "number": 4,
            "text": "What are the advantages and limitations of Hadoop",
            "cleanText": "What are the advantages and limitations of Hadoop",
            "marks": 5,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u2-5m-5",
            "number": 5,
            "text": "Secondary Name node is a backup of Name node. Is this statement True or False? Justify your answer.",
            "cleanText": "Secondary Name node is a backup of Name node. Is this statement True or False? Justify your answer.",
            "marks": 5,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u2-5m-6",
            "number": 6,
            "text": "What is the role of a combiner in the map reduce framework? Explain with the help of an example",
            "cleanText": "What is the role of a combiner in the map reduce framework? Explain with the help of an example",
            "marks": 5,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "bda-u2-10m-1",
            "number": 1,
            "text": "List the main components of Mapreduce execution pipeline",
            "cleanText": "List the main components of Mapreduce execution pipeline",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u2-10m-2",
            "number": 2,
            "text": "Explain HDFS architecture",
            "cleanText": "Explain HDFS architecture",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u2-10m-3",
            "number": 3,
            "text": "Write a Map reduce pseudo code to multiply two matrices. Illustrate with an example showing all the steps",
            "cleanText": "Write a Map reduce pseudo code to multiply two matrices. Illustrate with an example showing all the steps",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u2-10m-4",
            "number": 4,
            "text": "List the main components of Map reduce execution pipeline",
            "cleanText": "List the main components of Map reduce execution pipeline",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u2-10m-5",
            "number": 5,
            "text": "Illustrate relational algebra operations with example",
            "cleanText": "Illustrate relational algebra operations with example",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u2-10m-6",
            "number": 6,
            "text": "Write the functions of the components and execution steps in Map Reduce",
            "cleanText": "Write the functions of the components and execution steps in Map Reduce",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u2-10m-7",
            "number": 7,
            "text": "Write the functions of the components and execution steps in Map Reduce",
            "cleanText": "Write the functions of the components and execution steps in Map Reduce",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u2-10m-8",
            "number": 8,
            "text": "Explain Selection and Projection algebraic operation using MapReduce",
            "cleanText": "Explain Selection and Projection algebraic operation using MapReduce",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u2-10m-9",
            "number": 9,
            "text": "Explain Map Reduce execution pipeline with suitable example.",
            "cleanText": "Explain Map Reduce execution pipeline with suitable example.",
            "marks": 10,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u2-10m-10",
            "number": 10,
            "text": "Write a map reduce pseudo code for word count problem. Apply map reduce working on the following document: 'This is NoSQL. NoSQL handles complex data.'",
            "cleanText": "Write a map reduce pseudo code for word count problem. Apply map reduce working on the following document: 'This is NoSQL. NoSQL handles complex data.'",
            "marks": 10,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u2-10m-11",
            "number": 11,
            "text": "Write map-reduce pseudo code/algorithm to solve wordcount problem. Apply map-reduce working on the following document: \"Big data is powerful. Big data drives decisions.\"",
            "cleanText": "Write map-reduce pseudo code/algorithm to solve wordcount problem. Apply map-reduce working on the following document: \"Big data is powerful. Big data drives decisions.\"",
            "marks": 10,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u2-10m-12",
            "number": 12,
            "text": "Write a Map Reduce pseudo code to Vector-Matrix multiplication. Demonstrate all the steps for the following matrix and vector:\n\n$$M = \\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{bmatrix}, \\quad V = \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix}$$",
            "cleanText": "Write a Map Reduce pseudo code to Vector-Matrix multiplication. Demonstrate all the steps for the following matrix and vector:\n\nM = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], V = [1, 2, 3]",
            "marks": 10,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 18
      },
      {
        "number": 3,
        "title": "UNIT 3 - NoSQL",
        "questions5": [
          {
            "id": "bda-u3-5m-1",
            "number": 1,
            "text": "Explain CAP theorem. State how it is different from ACID properties",
            "cleanText": "Explain CAP theorem. State how it is different from ACID properties",
            "marks": 5,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u3-5m-2",
            "number": 2,
            "text": "Differentiate between SQL vs NoSQL",
            "cleanText": "Differentiate between SQL vs NoSQL",
            "marks": 5,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u3-5m-3",
            "number": 3,
            "text": "Differentiate between SQL vs NoSQL",
            "cleanText": "Differentiate between SQL vs NoSQL",
            "marks": 5,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u3-5m-4",
            "number": 4,
            "text": "List and explain the core business drivers behind the NoSQL movement.",
            "cleanText": "List and explain the core business drivers behind the NoSQL movement.",
            "marks": 5,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "bda-u3-10m-1",
            "number": 1,
            "text": "Explain the four types of NoSQL database",
            "cleanText": "Explain the four types of NoSQL database",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u3-10m-2",
            "number": 2,
            "text": "Explain Column family store and Graph Store NoSQL architectural pattern with example",
            "cleanText": "Explain Column family store and Graph Store NoSQL architectural pattern with example",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u3-10m-3",
            "number": 3,
            "text": "Compare different types of NoSQL architectural pattern",
            "cleanText": "Compare different types of NoSQL architectural pattern",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u3-10m-4",
            "number": 4,
            "text": "Explain Key-value store and Document Store NoSQL architectural pattern with example",
            "cleanText": "Explain Key-value store and Document Store NoSQL architectural pattern with example",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u3-10m-5",
            "number": 5,
            "text": "Four ways that NoSQL systems handle big data problems",
            "cleanText": "Four ways that NoSQL systems handle big data problems",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u3-10m-6",
            "number": 6,
            "text": "List the architectural patterns in NoSQL databases. Discuss the Key-Value and Document-Oriented patterns, focusing on their characteristics, use cases, and examples.",
            "cleanText": "List the architectural patterns in NoSQL databases. Discuss the Key-Value and Document-Oriented patterns, focusing on their characteristics, use cases, and examples.",
            "marks": 10,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u3-10m-7",
            "number": 7,
            "text": "Summarize how business problems have been successfully solved faster, cheaper and more effectively considering NOSQL Google's bigtable case study. Also, illustrate the business drivers and findings in it",
            "cleanText": "Summarize how business problems have been successfully solved faster, cheaper and more effectively considering NOSQL Google's bigtable case study. Also, illustrate the business drivers and findings in it",
            "marks": 10,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 11
      },
      {
        "number": 4,
        "title": "UNIT 4 - Mining Data Streams",
        "questions5": [
          {
            "id": "bda-u4-5m-1",
            "number": 1,
            "text": "Compare DBMS VS DSMS",
            "cleanText": "Compare DBMS VS DSMS",
            "marks": 5,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u4-5m-2",
            "number": 2,
            "text": "Bloom filter for stream data mining (short note)",
            "cleanText": "Bloom filter for stream data mining (short note)",
            "marks": 5,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u4-5m-3",
            "number": 3,
            "text": "List down any five constraints that must be satisfied for representing a stream by buckets using DGIM algorithm with examples.",
            "cleanText": "List down any five constraints that must be satisfied for representing a stream by buckets using DGIM algorithm with examples.",
            "marks": 5,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u4-5m-4",
            "number": 4,
            "text": "Which algorithm can be used for finding distinct elements in a long data stream? Give two real life applications for the same",
            "cleanText": "Which algorithm can be used for finding distinct elements in a long data stream? Give two real life applications for the same",
            "marks": 5,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u4-5m-5",
            "number": 5,
            "text": "Why recall is 100% for blooms filter, explain in detail",
            "cleanText": "Why recall is 100% for blooms filter, explain in detail",
            "marks": 5,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "bda-u4-10m-1",
            "number": 1,
            "text": "Explain DGIM algorithm",
            "cleanText": "Explain DGIM algorithm",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u4-10m-2",
            "number": 2,
            "text": "Explain Issues in Data stream query processing",
            "cleanText": "Explain Issues in Data stream query processing",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u4-10m-3",
            "number": 3,
            "text": "Explain DGIM algorithm",
            "cleanText": "Explain DGIM algorithm",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u4-10m-4",
            "number": 4,
            "text": "Write issues in data stream queries. Explain the issues in data streaming",
            "cleanText": "Write issues in data stream queries. Explain the issues in data streaming",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u4-10m-5",
            "number": 5,
            "text": "Draw a neat sketch, explain the architecture of the data-stream management system",
            "cleanText": "Draw a neat sketch, explain the architecture of the data-stream management system",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u4-10m-6",
            "number": 6,
            "text": "Explain DGIM algorithm for counting ones in a stream with example",
            "cleanText": "Explain DGIM algorithm for counting ones in a stream with example",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u4-10m-7",
            "number": 7,
            "text": "Bloom Filter with analysis",
            "cleanText": "Bloom Filter with analysis",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u4-10m-8",
            "number": 8,
            "text": "Create a Bloom filter with the following parameters:\n• Size of the bit array: $m = 8$\n• Hash functions:\n  $h_1(x) = x \\bmod m$\n  $h_2(x) = (2x + 1) \\bmod m$\n  $h_3(x) = (3x + 2) \\bmod m$\n\n(i) Insert elements 12, 25, 30, 5\n(ii) Check if 6, 55 are present\n(iii) Identify true positive and true negative.",
            "cleanText": "Create a Bloom filter with the following parameters:\n• Size of the bit array: $m = 8$\n• Hash functions:\n  $h_1(x) = x \\bmod m$\n  $h_2(x) = (2x + 1) \\bmod m$\n  $h_3(x) = (3x + 2) \\bmod m$\n\n(i) Insert elements 12, 25, 30, 5\n(ii) Check if 6, 55 are present\n(iii) Identify true positive and true negative.",
            "marks": 10,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u4-10m-9",
            "number": 9,
            "text": "For the stream of integers: 9, 8, 7, 6, 5, 4, 3, 2\n\nUse the hash function $h(x) = (2x + 1) \\bmod 32$ and treat the result as a 5-bit binary integer.\n\nShow the steps of the Flajolet-Martin algorithm to estimate the number of distinct elements in this stream.",
            "cleanText": "For the stream of integers: 9, 8, 7, 6, 5, 4, 3, 2\n\nUse the hash function $h(x) = (2x + 1) \\bmod 32$ and treat the result as a 5-bit binary integer.\n\nShow the steps of the Flajolet-Martin algorithm to estimate the number of distinct elements in this stream.",
            "marks": 10,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u4-10m-10",
            "number": 10,
            "text": "Discuss Bloom's filter in detail and insert elements 10 and 7 in Bloom's filter of size 5 using following hash functions:\n• $h_1(x) = x \\bmod 5$\n• $h_2(x) = (2x + 6) \\bmod 5$",
            "cleanText": "Discuss Bloom's filter in detail and insert elements 10 and 7 in Bloom's filter of size 5 using following hash functions:\n• $h_1(x) = x \\bmod 5$\n• $h_2(x) = (2x + 6) \\bmod 5$",
            "marks": 10,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u4-10m-11",
            "number": 11,
            "text": "Suppose our stream consists of the integers: 3, 1, 4, 1, 5, 9, 2, 6, 5\n\nDetermine the number of distinct elements if the hash function is $h(x) = (3x + 7) \\bmod 8$, and treat the result as a 5-bit binary integer.",
            "cleanText": "Suppose our stream consists of the integers: 3, 1, 4, 1, 5, 9, 2, 6, 5\n\nDetermine the number of distinct elements if the hash function is $h(x) = (3x + 7) \\bmod 8$, and treat the result as a 5-bit binary integer.",
            "marks": 10,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 16
      },
      {
        "number": 5,
        "title": "UNIT 5 - Finding Similar Items and Clustering",
        "questions5": [
          {
            "id": "bda-u5-5m-1",
            "number": 1,
            "text": "Distance measures for Big Data (short note)",
            "cleanText": "Distance measures for Big Data (short note)",
            "marks": 5,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u5-5m-2",
            "number": 2,
            "text": "List and explain Distance measures for Big Data",
            "cleanText": "List and explain Distance measures for Big Data",
            "marks": 5,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "bda-u5-10m-1",
            "number": 1,
            "text": "Explain cure algorithm",
            "cleanText": "Explain cure algorithm",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u5-10m-2",
            "number": 2,
            "text": "Explain with example two major classes of distance measures",
            "cleanText": "Explain with example two major classes of distance measures",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u5-10m-3",
            "number": 3,
            "text": "Explain CURE algorithm",
            "cleanText": "Explain CURE algorithm",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u5-10m-4",
            "number": 4,
            "text": "Explain CURE algorithm with its advantages over traditional clustering algorithm",
            "cleanText": "Explain CURE algorithm with its advantages over traditional clustering algorithm",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u5-10m-5",
            "number": 5,
            "text": "Explain PCY algorithm and its types with neat labeled diagram",
            "cleanText": "Explain PCY algorithm and its types with neat labeled diagram",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u5-10m-6",
            "number": 6,
            "text": "Cure Algorithm",
            "cleanText": "Cure Algorithm",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u5-10m-7",
            "number": 7,
            "text": "Justify the use of a Content-Based Recommendation System with a specific case study.",
            "cleanText": "Justify the use of a Content-Based Recommendation System with a specific case study.",
            "marks": 10,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 9
      },
      {
        "number": 6,
        "title": "UNIT 6 - Real-Time Big Data Models",
        "questions5": [
          {
            "id": "bda-u6-5m-1",
            "number": 1,
            "text": "Describe terms TF and IDF with respect to content based filtering",
            "cleanText": "Describe terms TF and IDF with respect to content based filtering",
            "marks": 5,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "bda-u6-10m-1",
            "number": 1,
            "text": "What is Recommender System? Explain Types of recommender system",
            "cleanText": "What is Recommender System? Explain Types of recommender system",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u6-10m-2",
            "number": 2,
            "text": "What is a Social Network? Give Varieties of Social Networks and the need for social network graph",
            "cleanText": "What is a Social Network? Give Varieties of Social Networks and the need for social network graph",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u6-10m-3",
            "number": 3,
            "text": "Explain the structure of web with suitable diagram",
            "cleanText": "Explain the structure of web with suitable diagram",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u6-10m-4",
            "number": 4,
            "text": "Explain Collaborative filtering system. How is it different from content-based system",
            "cleanText": "Explain Collaborative filtering system. How is it different from content-based system",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u6-10m-5",
            "number": 5,
            "text": "What is clique percolation method? Write an algorithm on (CPM). Also show how the CPM finds clique for the following graph. Explain with steps",
            "cleanText": "What is clique percolation method? Write an algorithm on (CPM). Also show how the CPM finds clique for the following graph. Explain with steps",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": true,
            "diagramUrl": "/diagrams/BDA/CPM_Numerical.png"
          },
          {
            "id": "bda-u6-10m-6",
            "number": 6,
            "text": "Explain PageRank algorithm",
            "cleanText": "Explain PageRank algorithm",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u6-10m-7",
            "number": 7,
            "text": "Explain Page rank using Map reduce, also explain spider traps and dead ends",
            "cleanText": "Explain Page rank using Map reduce, also explain spider traps and dead ends",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u6-10m-8",
            "number": 8,
            "text": "Explain Movie recommendation using Collaborative filtering",
            "cleanText": "Explain Movie recommendation using Collaborative filtering",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u6-10m-9",
            "number": 9,
            "text": "Explain Page rank using Map reduce, also explain spider traps and dead ends",
            "cleanText": "Explain Page rank using Map reduce, also explain spider traps and dead ends",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u6-10m-10",
            "number": 10,
            "text": "Explain Movie recommendation using Content-based filtering",
            "cleanText": "Explain Movie recommendation using Content-based filtering",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u6-10m-11",
            "number": 11,
            "text": "Clustering of Social-Network Graphs",
            "cleanText": "Clustering of Social-Network Graphs",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-u6-10m-12",
            "number": 12,
            "text": "Write an algorithm for the Clique Percolation Method and discover the communities in a given graph using Clique Percolation Method with clique k=3.",
            "cleanText": "Write an algorithm for the Clique Percolation Method and discover the communities in a given graph using Clique Percolation Method with clique k=3.",
            "marks": 10,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": true,
            "diagramUrl": "/diagrams/BDA/CPM_Numerical_2.png"
          },
          {
            "id": "bda-u6-10m-13",
            "number": 13,
            "text": "Predict rating of user 2 for Movie 3 using Pearson's Correlation coefficient",
            "cleanText": "Predict rating of user 2 for Movie 3 using Pearson's Correlation coefficient",
            "marks": 10,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": true,
            "diagramUrl": "/diagrams/BDA/table_2.png"
          },
          {
            "id": "bda-u6-10m-14",
            "number": 14,
            "text": "Demonstrate the different communities using Girvan-Newman algorithm for the following graph with nodes A, B, C, D, E and edges:\nA-B, A-C, B-D, B-E, C-D, D-E",
            "cleanText": "Demonstrate the different communities using Girvan-Newman algorithm for the following graph with nodes A, B, C, D, E and edges:\nA-B, A-C, B-D, B-E, C-D, D-E",
            "marks": 10,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": true,
            "diagramUrl": "/diagrams/BDA/diagram_2.png"
          }
        ],
        "totalQuestions": 15
      },
      {
        "number": 7,
        "title": "R PROGRAMMING",
        "questions5": [
          {
            "id": "bda-r-5m-1",
            "number": 1,
            "text": "Write an R script to sort the values contained in the following vector in ascending order and descending order: (46, 23, 15, 38, 98, 56, 28, 78). Demonstrate the output.",
            "cleanText": "Write an R script to sort the values contained in the following vector in ascending order and descending order: (46, 23, 15, 38, 98, 56, 28, 78). Demonstrate the output.",
            "marks": 5,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "bda-r-10m-1",
            "number": 1,
            "text": "List and explain the functions provided by R to combine different sets of data, and write a script to sort values contained in a vector in ascending and descending order.",
            "cleanText": "List and explain the functions provided by R to combine different sets of data, and write a script to sort values contained in a vector in ascending and descending order.",
            "marks": 10,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          },
          {
            "id": "bda-r-10m-2",
            "number": 2,
            "text": "The project manager at ABC Corp, Mr. Thomas, needs to track information about ongoing projects in the organization. He has the following details about current projects in a table format:\n\ni) Create a Data Frame in R for the above project data and display the output.\nii) Show the structure and summary statistics of the Data Frame created.",
            "cleanText": "The project manager at ABC Corp, Mr. Thomas, needs to track information about ongoing projects in the organization. He has the following details about current projects in a table format:\n\ni) Create a Data Frame in R for the above project data and display the output.\nii) Show the structure and summary statistics of the Data Frame created.",
            "marks": 10,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": true,
            "diagramUrl": "/diagrams/BDA/table_BDA.png"
          },
          {
            "id": "bda-r-10m-3",
            "number": 3,
            "text": "Explain different data visualization techniques in R with examples",
            "cleanText": "Explain different data visualization techniques in R with examples",
            "marks": 10,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 4
      }
    ],
    "total5M": 25,
    "total10M": 62,
    "totalQuestions": 87
  },
  {
    "slug": "nlp",
    "code": "NLP",
    "name": "Natural Language Processing",
    "examDate": "21 Nov 2026, Saturday",
    "examDateISO": "2026-11-21T10:30:00+05:30",
    "order": 3,
    "description": "N-grams, morphology, POS tagging, Word Sense Disambiguation, semantic relationships, reference resolution, and translation.",
    "status": "available",
    "units": [
      {
        "number": 1,
        "title": "UNIT 1 - Introduction",
        "questions5": [
          {
            "id": "nlp-u1-5m-1",
            "number": 1,
            "text": "Discuss various challenges in processing natural language.",
            "cleanText": "Discuss various challenges in processing natural language.",
            "marks": 5,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u1-5m-2",
            "number": 2,
            "text": "Differentiate between Syntactic ambiguity and Lexical Ambiguity.",
            "cleanText": "Differentiate between Syntactic ambiguity and Lexical Ambiguity.",
            "marks": 5,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "nlp-u1-10m-1",
            "number": 1,
            "text": "What is Natural language processing (NLP)? Discuss various stages involved in NLP process with suitable example",
            "cleanText": "What is Natural language processing (NLP)? Discuss various stages involved in NLP process with suitable example",
            "marks": 10,
            "years": [
              "Dec 2024",
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u1-10m-2",
            "number": 2,
            "text": "What do you mean by ambiguity in natural Language? Explain its types and ways to resolve it with suitable example",
            "cleanText": "What do you mean by ambiguity in natural Language? Explain its types and ways to resolve it with suitable example",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u1-10m-3",
            "number": 3,
            "text": "Discuss various challenges and applications of NLP in detail",
            "cleanText": "Discuss various challenges and applications of NLP in detail",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u1-10m-4",
            "number": 4,
            "text": "Explain the preprocessing operations in natural language processing.",
            "cleanText": "Explain the preprocessing operations in natural language processing.",
            "marks": 10,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 6
      },
      {
        "number": 2,
        "title": "UNIT 2 - Word Level Analysis",
        "questions5": [
          {
            "id": "nlp-u2-5m-1",
            "number": 1,
            "text": "Define Affixes. Explain types of Affixes",
            "cleanText": "Define Affixes. Explain types of Affixes",
            "marks": 5,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u2-5m-2",
            "number": 2,
            "text": "Perplexity of any language model (short note)",
            "cleanText": "Perplexity of any language model (short note)",
            "marks": 5,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u2-5m-3",
            "number": 3,
            "text": "Compare derivational and inflectional morphology with suitable example.",
            "cleanText": "Compare derivational and inflectional morphology with suitable example.",
            "marks": 5,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u2-5m-4",
            "number": 4,
            "text": "What is hybrid POS tagging?",
            "cleanText": "What is hybrid POS tagging?",
            "marks": 5,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "nlp-u2-10m-1",
            "number": 1,
            "text": "What is language model? Write a note on N-gram model",
            "cleanText": "What is language model? Write a note on N-gram model",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u2-10m-2",
            "number": 2,
            "text": "Explain Porter’s Stemming algorithm with example",
            "cleanText": "Explain Porter’s Stemming algorithm with example",
            "marks": 10,
            "years": [
              "Dec 2024",
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u2-10m-3",
            "number": 3,
            "text": "Illustrate inflectional and derivational morphology with an example",
            "cleanText": "Illustrate inflectional and derivational morphology with an example",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u2-10m-4",
            "number": 4,
            "text": "Explain Porter Stemmer algorithm in detail",
            "cleanText": "Explain Porter Stemmer algorithm in detail",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u2-10m-5",
            "number": 5,
            "text": "Explain preprocessing steps of NLP with example in detail",
            "cleanText": "Explain preprocessing steps of NLP with example in detail",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u2-10m-6",
            "number": 6,
            "text": "Consider the following corpus:\n<s> I am Sam </s>\n<s> I like college </s>\n<s> Do Sam like college </s>\n<s> Sam I am </s>\n<s> Do I like Sam </s>\n<s> Do I like college </s>\n<s> I do like Sam </s>\n\nList all possible bigrams. Compute conditional probabilities and predict the next word for the word:\ni) like\nii) Sam",
            "cleanText": "Consider the following corpus:\n<s> I am Sam </s>\n<s> I like college </s>\n<s> Do Sam like college </s>\n<s> Sam I am </s>\n<s> Do I like Sam </s>\n<s> Do I like college </s>\n<s> I do like Sam </s>\n\nList all possible bigrams. Compute conditional probabilities and predict the next word for the word:\ni) like\nii) Sam",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u2-10m-7",
            "number": 7,
            "text": "Explain the Porter Stemming algorithm in detail.",
            "cleanText": "Explain the Porter Stemming algorithm in detail.",
            "marks": 10,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u2-10m-8",
            "number": 8,
            "text": "Explain in detail Stochastic (HMM) tagging.",
            "cleanText": "Explain in detail Stochastic (HMM) tagging.",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u2-10m-9",
            "number": 9,
            "text": "Explain N-gram model with example.",
            "cleanText": "Explain N-gram model with example.",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u2-10m-10",
            "number": 10,
            "text": "Explain the N-gram language model and its application.",
            "cleanText": "Explain the N-gram language model and its application.",
            "marks": 10,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u2-10m-11",
            "number": 11,
            "text": "Design FST for regular and plural nouns.",
            "cleanText": "Design FST for regular and plural nouns.",
            "marks": 10,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u2-10m-12",
            "number": 12,
            "text": "Consider the corpus:\n<s> I am Sam </s>\n<s> Sam I am </s>\n<s> Sam I like </s>\n<s> Sam I do like </s>\n<s> do I like Sam </s>\n\nCompute predicted next words using bigram model.",
            "cleanText": "Consider the corpus:\n<s> I am Sam </s>\n<s> Sam I am </s>\n<s> Sam I like </s>\n<s> Sam I do like </s>\n<s> do I like Sam </s>\n\nCompute predicted next words using bigram model.",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u2-10m-13",
            "number": 13,
            "text": "Compute emission and transition probabilities for a bigram HMM with corpus and decode the sentence 'The cat chases the dog' using the Viterbi algorithm.",
            "cleanText": "Compute emission and transition probabilities for a bigram HMM with corpus and decode the sentence 'The cat chases the dog' using the Viterbi algorithm.",
            "marks": 10,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u2-10m-14",
            "number": 14,
            "text": "Explain how Maximum Entropy is used for sequence labeling.",
            "cleanText": "Explain how Maximum Entropy is used for sequence labeling.",
            "marks": 10,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 18
      },
      {
        "number": 3,
        "title": "UNIT 3 - Syntax Analysis",
        "questions5": [
          {
            "id": "nlp-u3-5m-1",
            "number": 1,
            "text": "Explain open and closed word classes in English Language. Show how the tags are assigned to the words of following sentence: “He used to provide help to other people”",
            "cleanText": "Explain open and closed word classes in English Language. Show how the tags are assigned to the words of following sentence: “He used to provide help to other people”",
            "marks": 5,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u3-5m-2",
            "number": 2,
            "text": "Explain types of word classes in English natural language processing",
            "cleanText": "Explain types of word classes in English natural language processing",
            "marks": 5,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u3-5m-3",
            "number": 3,
            "text": "Rule based taggers (short note)",
            "cleanText": "Rule based taggers (short note)",
            "marks": 5,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "nlp-u3-10m-1",
            "number": 1,
            "text": "Discuss the following potential problems in CFG such as: 1) Agreement 2) Sub categorization 3) Movement",
            "cleanText": "Discuss the following potential problems in CFG such as: 1) Agreement 2) Sub categorization 3) Movement",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u3-10m-2",
            "number": 2,
            "text": "Explain hidden Markov model for POS based tagging",
            "cleanText": "Explain hidden Markov model for POS based tagging",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u3-10m-3",
            "number": 3,
            "text": "What is parsing? Explain types of parsing in NLP.",
            "cleanText": "What is parsing? Explain types of parsing in NLP.",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u3-10m-4",
            "number": 4,
            "text": "Construct a parse tree for the sentence 'The tall girl sings' using given CFG rules.",
            "cleanText": "Construct a parse tree for the sentence 'The tall girl sings' using given CFG rules.",
            "marks": 10,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 7
      },
      {
        "number": 4,
        "title": "UNIT 4 - Semantic Analysis",
        "questions5": [
          {
            "id": "nlp-u4-5m-1",
            "number": 1,
            "text": "What do you mean by word sense disambiguation (WSD)?",
            "cleanText": "What do you mean by word sense disambiguation (WSD)?",
            "marks": 5,
            "years": [
              "Dec 2024",
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u4-5m-2",
            "number": 2,
            "text": "What is word sense disambiguation?",
            "cleanText": "What is word sense disambiguation?",
            "marks": 5,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u4-5m-3",
            "number": 3,
            "text": "Write a short note on WordNet.",
            "cleanText": "Write a short note on WordNet.",
            "marks": 5,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "nlp-u4-10m-1",
            "number": 1,
            "text": "Explain with suitable example following relationships between word meanings: Homonymy, Polysemy, Synonymy, Antonymy, Hypernymy, Hyponymy, Meronymy",
            "cleanText": "Explain with suitable example following relationships between word meanings: Homonymy, Polysemy, Synonymy, Antonymy, Hypernymy, Hyponymy, Meronymy",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u4-10m-2",
            "number": 2,
            "text": "Explain Lesk’s algorithm in detail",
            "cleanText": "Explain Lesk’s algorithm in detail",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u4-10m-3",
            "number": 3,
            "text": "What is Word Sense Disambiguation? Explain Dictionary based Approach for Word Sense Disambiguation",
            "cleanText": "What is Word Sense Disambiguation? Explain Dictionary based Approach for Word Sense Disambiguation",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u4-10m-4",
            "number": 4,
            "text": "Explain with suitable example following relationships between word meanings: Homonymy, Polysemy, Synonymy, Antonymy, Hypernomy, Hyponomy, Meronomy.",
            "cleanText": "Explain with suitable example following relationships between word meanings: Homonymy, Polysemy, Synonymy, Antonymy, Hypernomy, Hyponomy, Meronomy.",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u4-10m-5",
            "number": 5,
            "text": "Explain how the supervised learning approach can be applied for word sense disambiguation.",
            "cleanText": "Explain how the supervised learning approach can be applied for word sense disambiguation.",
            "marks": 10,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 8
      },
      {
        "number": 5,
        "title": "UNIT 5 - Pragmatic & Discourse Processing",
        "questions5": [
          {
            "id": "nlp-u5-5m-1",
            "number": 1,
            "text": "Define Discourse & Pragmatic analysis",
            "cleanText": "Define Discourse & Pragmatic analysis",
            "marks": 5,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u5-5m-2",
            "number": 2,
            "text": "Discuss reference resolution problem in detail",
            "cleanText": "Discuss reference resolution problem in detail",
            "marks": 5,
            "years": [
              "May 2025",
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u5-5m-3",
            "number": 3,
            "text": "Explain reference resolution in detail.",
            "cleanText": "Explain reference resolution in detail.",
            "marks": 5,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "nlp-u5-10m-1",
            "number": 1,
            "text": "Discuss reference resolution problem in detail",
            "cleanText": "Discuss reference resolution problem in detail",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u5-10m-2",
            "number": 2,
            "text": "Discuss Hobbs Algorithm for Pronoun Resolution",
            "cleanText": "Discuss Hobbs Algorithm for Pronoun Resolution",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u5-10m-3",
            "number": 3,
            "text": "Write a note on Syntactic and Semantic Constraints on Coreference.",
            "cleanText": "Write a note on Syntactic and Semantic Constraints on Coreference.",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u5-10m-4",
            "number": 4,
            "text": "Compare and contrast Hobbs' Algorithm and Centering Theory.",
            "cleanText": "Compare and contrast Hobbs' Algorithm and Centering Theory.",
            "marks": 10,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 7
      },
      {
        "number": 6,
        "title": "UNIT 6 - Applications",
        "questions5": [
          {
            "id": "nlp-u6-5m-1",
            "number": 1,
            "text": "Discuss Information Retrieval vs Information Extraction in detail",
            "cleanText": "Discuss Information Retrieval vs Information Extraction in detail",
            "marks": 5,
            "years": [
              "Dec 2024",
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u6-5m-2",
            "number": 2,
            "text": "Compare Information Retrieval and Information extraction in detail",
            "cleanText": "Compare Information Retrieval and Information extraction in detail",
            "marks": 5,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u6-5m-3",
            "number": 3,
            "text": "Write a short note on Named Entity Recognition (NER).",
            "cleanText": "Write a short note on Named Entity Recognition (NER).",
            "marks": 5,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u6-5m-4",
            "number": 4,
            "text": "Write a short note on Machine Translation.",
            "cleanText": "Write a short note on Machine Translation.",
            "marks": 5,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u6-5m-5",
            "number": 5,
            "text": "Explain rule-based machine translation systems.",
            "cleanText": "Explain rule-based machine translation systems.",
            "marks": 5,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "nlp-u6-10m-1",
            "number": 1,
            "text": "Text Summarization (short note)",
            "cleanText": "Text Summarization (short note)",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u6-10m-2",
            "number": 2,
            "text": "Named Entity Resolution (short note)",
            "cleanText": "Named Entity Resolution (short note)",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u6-10m-3",
            "number": 3,
            "text": "Machine Translation (short note)",
            "cleanText": "Machine Translation (short note)",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u6-10m-4",
            "number": 4,
            "text": "Question Answering System (short note)",
            "cleanText": "Question Answering System (short note)",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u6-10m-5",
            "number": 5,
            "text": "Explain Machine Translation system in detail",
            "cleanText": "Explain Machine Translation system in detail",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "nlp-u6-10m-6",
            "number": 6,
            "text": "Explain text summarization in detail.",
            "cleanText": "Explain text summarization in detail.",
            "marks": 10,
            "years": [
              "Dec 2024 (2)"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 11
      }
    ],
    "total5M": 20,
    "total10M": 37,
    "totalQuestions": 57
  },
  {
    "slug": "gt",
    "code": "GT",
    "name": "Game Theory",
    "examDate": "25 Nov 2026, Wednesday",
    "examDateISO": "2026-11-25T10:30:00+05:30",
    "order": 4,
    "description": "Strategic games, Nash Equilibrium, Prisoner’s Dilemma, Bayesian games, VCG mechanism design, and repeated games.",
    "status": "available",
    "units": [
      {
        "number": 1,
        "title": "UNIT 1 - Introduction to Game Theory",
        "questions5": [
          {
            "id": "gt-u1-5m-1",
            "number": 1,
            "text": "Explain typical application areas for game theory with proper examples",
            "cleanText": "Explain typical application areas for game theory with proper examples",
            "marks": 5,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [],
        "totalQuestions": 1
      },
      {
        "number": 2,
        "title": "UNIT 2 - Games with Perfect Information",
        "questions5": [
          {
            "id": "gt-u2-5m-1",
            "number": 1,
            "text": "Describe the differences between zero-sum and non-zero-sum games with suitable examples",
            "cleanText": "Describe the differences between zero-sum and non-zero-sum games with suitable examples",
            "marks": 5,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "gt-u2-10m-1",
            "number": 1,
            "text": "Explain in detail the prisoner’s dilemma (PD) with payoff matrix and with suitable examples",
            "cleanText": "Explain in detail the prisoner’s dilemma (PD) with payoff matrix and with suitable examples",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "gt-u2-10m-2",
            "number": 2,
            "text": "Refer the below payoff matrix and identify the strategic game involved in it and describe it in brief",
            "cleanText": "Refer the below payoff matrix and identify the strategic game involved in it and describe it in brief",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "gt-u2-10m-3",
            "number": 3,
            "text": "Explain zero sum games in non-cooperative games",
            "cleanText": "Explain zero sum games in non-cooperative games",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "gt-u2-10m-4",
            "number": 4,
            "text": "Explain subgame perfect Nash equilibrium in game theory",
            "cleanText": "Explain subgame perfect Nash equilibrium in game theory",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "gt-u2-10m-5",
            "number": 5,
            "text": "Consider a game with the following payoff matrix for Player A and Player B:\n\n$$\\begin{array}{c|c|c} \\text{Player A} \\backslash \\text{Player B} & B_1 & B_2 \\\\ \\hline A_1 & (4, 2) & (3, 3) \\\\ \\hline A_2 & (2, 3) & (1, 4) \\end{array}$$\n\ni. Identify the Nash Equilibrium, if any.\nii. Discuss whether this game has a dominant strategy for any player.",
            "cleanText": "Consider a game with the following payoff matrix for Player A and Player B:\n\n$$\\begin{array}{c|c|c} \\text{Player A} \\backslash \\text{Player B} & B_1 & B_2 \\\\ \\hline A_1 & (4, 2) & (3, 3) \\\\ \\hline A_2 & (2, 3) & (1, 4) \\end{array}$$\n\ni. Identify the Nash Equilibrium, if any.\nii. Discuss whether this game has a dominant strategy for any player.",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "gt-u2-10m-6",
            "number": 6,
            "text": "Explain in detail the prisoner’s dilemma (PD) with payoff matrix and with suitable examples",
            "cleanText": "Explain in detail the prisoner’s dilemma (PD) with payoff matrix and with suitable examples",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "gt-u2-10m-7",
            "number": 7,
            "text": "Explain the concept of mixed strategy equilibrium. How does it differ from pure strategy equilibrium? Illustrate with an example",
            "cleanText": "Explain the concept of mixed strategy equilibrium. How does it differ from pure strategy equilibrium? Illustrate with an example",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "gt-u2-10m-8",
            "number": 8,
            "text": "What is a sequential game? How does it differ from a simultaneous game?",
            "cleanText": "What is a sequential game? How does it differ from a simultaneous game?",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "gt-u2-10m-9",
            "number": 9,
            "text": "Bertrand and Cournot models of oligopoly (short note)",
            "cleanText": "Bertrand and Cournot models of oligopoly (short note)",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 10
      },
      {
        "number": 3,
        "title": "UNIT 3 - Games with Imperfect Information",
        "questions5": [
          {
            "id": "gt-u3-5m-1",
            "number": 1,
            "text": "What do you mean by bargaining in context of game theory",
            "cleanText": "What do you mean by bargaining in context of game theory",
            "marks": 5,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "gt-u3-5m-2",
            "number": 2,
            "text": "What is a Bayesian game? Illustrate with an example",
            "cleanText": "What is a Bayesian game? Illustrate with an example",
            "marks": 5,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "gt-u3-10m-1",
            "number": 1,
            "text": "Define Bayesian Nash Equilibrium and find the value of p according to BNE in below given payoff matrices",
            "cleanText": "Define Bayesian Nash Equilibrium and find the value of p according to BNE in below given payoff matrices",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "gt-u3-10m-2",
            "number": 2,
            "text": "What do you mean games with Perfect Information and games with imperfect information. Explain with examples",
            "cleanText": "What do you mean games with Perfect Information and games with imperfect information. Explain with examples",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "gt-u3-10m-3",
            "number": 3,
            "text": "What do you mean by games with Perfect Information and games with imperfect information? Explain with examples",
            "cleanText": "What do you mean by games with Perfect Information and games with imperfect information? Explain with examples",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 5
      },
      {
        "number": 4,
        "title": "UNIT 4 - Non-Cooperative Game Theory",
        "questions5": [],
        "questions10": [
          {
            "id": "gt-u4-10m-1",
            "number": 1,
            "text": "Computing Solution Concepts of Normal – Form Games (short note)",
            "cleanText": "Computing Solution Concepts of Normal – Form Games (short note)",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "gt-u4-10m-2",
            "number": 2,
            "text": "Computing Solution Concepts of Normal – Form Games (short note)",
            "cleanText": "Computing Solution Concepts of Normal – Form Games (short note)",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 2
      },
      {
        "number": 5,
        "title": "UNIT 5 - Mechanism Design Aggregating Preferences",
        "questions5": [
          {
            "id": "gt-u5-5m-1",
            "number": 1,
            "text": "Define what is meant by “mechanism design” in the context of aggregating preferences",
            "cleanText": "Define what is meant by “mechanism design” in the context of aggregating preferences",
            "marks": 5,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "gt-u5-10m-1",
            "number": 1,
            "text": "VCG mechanisms (short note)",
            "cleanText": "VCG mechanisms (short note)",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "gt-u5-10m-2",
            "number": 2,
            "text": "Explain the Vickrey-Clarke-Groves (VCG) mechanism with an example",
            "cleanText": "Explain the Vickrey-Clarke-Groves (VCG) mechanism with an example",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "gt-u5-10m-3",
            "number": 3,
            "text": "What is Mechanism Design in game theory? Discuss its importance in economics, data science or any domain",
            "cleanText": "What is Mechanism Design in game theory? Discuss its importance in economics, data science or any domain",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 4
      },
      {
        "number": 6,
        "title": "UNIT 6 - Repeated Games",
        "questions5": [
          {
            "id": "gt-u6-5m-1",
            "number": 1,
            "text": "Explain the significance of the discount factor in the context of repeated games. How does it affect the players’ strategies and outcomes over multiple rounds?",
            "cleanText": "Explain the significance of the discount factor in the context of repeated games. How does it affect the players’ strategies and outcomes over multiple rounds?",
            "marks": 5,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "gt-u6-5m-2",
            "number": 2,
            "text": "Describe how the discount factor (δ) affects the players’ preferences for current versus future payoffs in infinitely repeated games",
            "cleanText": "Describe how the discount factor (δ) affects the players’ preferences for current versus future payoffs in infinitely repeated games",
            "marks": 5,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "gt-u6-10m-1",
            "number": 1,
            "text": "Repeated Games (short note)",
            "cleanText": "Repeated Games (short note)",
            "marks": 10,
            "years": [
              "Dec 2023"
            ],
            "hasDiagram": false
          },
          {
            "id": "gt-u6-10m-2",
            "number": 2,
            "text": "Repeated Games (short note)",
            "cleanText": "Repeated Games (short note)",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 4
      }
    ],
    "total5M": 7,
    "total10M": 19,
    "totalQuestions": 26
  },
  {
    "slug": "mis",
    "code": "MIS",
    "name": "Management Information System",
    "examDate": "27 Nov 2026, Friday",
    "examDateISO": "2026-11-27T10:30:00+05:30",
    "order": 5,
    "description": "Computer-based information systems, data & knowledge management, cybersecurity & ethics, social commerce, cloud computing, and ERP/SDLC.",
    "status": "available",
    "units": [
      {
        "number": 1,
        "title": "UNIT 1 - Introduction to Information Systems (IS)",
        "questions5": [
          {
            "id": "mis-u1-5m-1",
            "number": 1,
            "text": "List the various components of CBIS.",
            "cleanText": "List the various components of CBIS.",
            "marks": 5,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u1-5m-2",
            "number": 2,
            "text": "How Does IT Impact Organizations?",
            "cleanText": "How Does IT Impact Organizations?",
            "marks": 5,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u1-5m-3",
            "number": 3,
            "text": "Identify the reasons why being an informed user of information systems is important in today's world.",
            "cleanText": "Identify the reasons why being an informed user of information systems is important in today's world.",
            "marks": 5,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u1-5m-4",
            "number": 4,
            "text": "What is a Business Process? How is it integrated in MIS?",
            "cleanText": "What is a Business Process? How is it integrated in MIS?",
            "marks": 5,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u1-5m-5",
            "number": 5,
            "text": "What strategy company use to get competitive advantage?",
            "cleanText": "What strategy company use to get competitive advantage?",
            "marks": 5,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "mis-u1-10m-1",
            "number": 1,
            "text": "Highlight the Economic impacts of IS. Give example.",
            "cleanText": "Highlight the Economic impacts of IS. Give example.",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u1-10m-2",
            "number": 2,
            "text": "Contrast to bring out the advantages and disadvantages of Competitive environment in an organization.",
            "cleanText": "Contrast to bring out the advantages and disadvantages of Competitive environment in an organization.",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u1-10m-3",
            "number": 3,
            "text": "What are types IS? Explain with example.",
            "cleanText": "What are types IS? Explain with example.",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u1-10m-4",
            "number": 4,
            "text": "Explain the impact of information system on organization and society.",
            "cleanText": "Explain the impact of information system on organization and society.",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 9
      },
      {
        "number": 2,
        "title": "UNIT 2 - Data and Knowledge Management",
        "questions5": [
          {
            "id": "mis-u2-5m-1",
            "number": 1,
            "text": "Differentiate between data warehouses and data marts.",
            "cleanText": "Differentiate between data warehouses and data marts.",
            "marks": 5,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u2-5m-2",
            "number": 2,
            "text": "Categorize the approach to managing information across an entire organization.",
            "cleanText": "Categorize the approach to managing information across an entire organization.",
            "marks": 5,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "mis-u2-10m-1",
            "number": 1,
            "text": "How the quality of Data is ensured in an organization?",
            "cleanText": "How the quality of Data is ensured in an organization?",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u2-10m-2",
            "number": 2,
            "text": "Analyze the impact of BI on Decision making.",
            "cleanText": "Analyze the impact of BI on Decision making.",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u2-10m-3",
            "number": 3,
            "text": "Explain Data warehouse in an organization.",
            "cleanText": "Explain Data warehouse in an organization.",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u2-10m-4",
            "number": 4,
            "text": "Highlight how company can use Big data to gain competitive advantage?",
            "cleanText": "Highlight how company can use Big data to gain competitive advantage?",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u2-10m-5",
            "number": 5,
            "text": "Explain the steps involved in knowledge capturing.",
            "cleanText": "Explain the steps involved in knowledge capturing.",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u2-10m-6",
            "number": 6,
            "text": "Utilize the principles of the Knowledge Management life cycle to construct a framework for the development of Learning Management Systems.",
            "cleanText": "Utilize the principles of the Knowledge Management life cycle to construct a framework for the development of Learning Management Systems.",
            "marks": 10,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u2-10m-7",
            "number": 7,
            "text": "Is Big Data really a problem on its own, or are the use, control, and security of the data the true problem? Provide specific examples to support your answer.",
            "cleanText": "Is Big Data really a problem on its own, or are the use, control, and security of the data the true problem? Provide specific examples to support your answer.",
            "marks": 10,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 9
      },
      {
        "number": 3,
        "title": "UNIT 3 - Ethical Issues, Privacy, and Information Security",
        "questions5": [
          {
            "id": "mis-u3-5m-1",
            "number": 1,
            "text": "Define Information security with an example.",
            "cleanText": "Define Information security with an example.",
            "marks": 5,
            "years": [
              "May 2025",
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u3-5m-2",
            "number": 2,
            "text": "Analyze the issues with Cookies, Web bugs and web spy software.",
            "cleanText": "Analyze the issues with Cookies, Web bugs and web spy software.",
            "marks": 5,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "mis-u3-10m-1",
            "number": 1,
            "text": "Analyse the main reasons of Computer Crimes.",
            "cleanText": "Analyse the main reasons of Computer Crimes.",
            "marks": 10,
            "years": [
              "May 2025",
              "Dec 2024",
              "Dec 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u3-10m-2",
            "number": 2,
            "text": "Describe the privacy issues affected by IT.",
            "cleanText": "Describe the privacy issues affected by IT.",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u3-10m-3",
            "number": 3,
            "text": "Discuss how privacy issue can impact transborder data flows?",
            "cleanText": "Discuss how privacy issue can impact transborder data flows?",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u3-10m-4",
            "number": 4,
            "text": "Is security an ethical responsibility? Justify with a case study.",
            "cleanText": "Is security an ethical responsibility? Justify with a case study.",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u3-10m-5",
            "number": 5,
            "text": "Identify the measures to improve cyber security with example.",
            "cleanText": "Identify the measures to improve cyber security with example.",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u3-10m-6",
            "number": 6,
            "text": "What types of user authentication are used at your university and/or place of work? Do these measures seem to be effective? What if a higher level of authentication were implemented? Would it be worth it, or would it decrease productivity?",
            "cleanText": "What types of user authentication are used at your university and/or place of work? Do these measures seem to be effective? What if a higher level of authentication were implemented? Would it be worth it, or would it decrease productivity?",
            "marks": 10,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u3-10m-7",
            "number": 7,
            "text": "Give an understanding on types of Control to achieve Security.",
            "cleanText": "Give an understanding on types of Control to achieve Security.",
            "marks": 10,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 9
      },
      {
        "number": 4,
        "title": "UNIT 4 - Social Computing, E-Commerce, and Mobile Commerce",
        "questions5": [
          {
            "id": "mis-u4-5m-1",
            "number": 1,
            "text": "Are Blogs and Wikis different? Justify with application of each.",
            "cleanText": "Are Blogs and Wikis different? Justify with application of each.",
            "marks": 5,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u4-5m-2",
            "number": 2,
            "text": "How is E-commerce supported by MIS? Give one case to describe same.",
            "cleanText": "How is E-commerce supported by MIS? Give one case to describe same.",
            "marks": 5,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u4-5m-3",
            "number": 3,
            "text": "Compare between mobile applications like WhatsApp and Telegram on various parameters like multimedia, security, privacy, storage, data usage, notifications etc.",
            "cleanText": "Compare between mobile applications like WhatsApp and Telegram on various parameters like multimedia, security, privacy, storage, data usage, notifications etc.",
            "marks": 5,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u4-5m-4",
            "number": 4,
            "text": "Analyze how social computing is inspiring customer service?",
            "cleanText": "Analyze how social computing is inspiring customer service?",
            "marks": 5,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "mis-u4-10m-1",
            "number": 1,
            "text": "Briefly describe the benefits of social commerce to customers.",
            "cleanText": "Briefly describe the benefits of social commerce to customers.",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u4-10m-2",
            "number": 2,
            "text": "Explain CRM. Describe the different types of CRM with example.",
            "cleanText": "Explain CRM. Describe the different types of CRM with example.",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u4-10m-3",
            "number": 3,
            "text": "Write note on mobile-commerce.",
            "cleanText": "Write note on mobile-commerce.",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u4-10m-4",
            "number": 4,
            "text": "Give examples of B2B and B2C Business Models and contribution of MIS to control these models.",
            "cleanText": "Give examples of B2B and B2C Business Models and contribution of MIS to control these models.",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u4-10m-5",
            "number": 5,
            "text": "Briefly describe the risks of social computing to business giving suitable examples.",
            "cleanText": "Briefly describe the risks of social computing to business giving suitable examples.",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u4-10m-6",
            "number": 6,
            "text": "Write note on e-commerce.",
            "cleanText": "Write note on e-commerce.",
            "marks": 10,
            "years": [
              "Dec 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u4-10m-7",
            "number": 7,
            "text": "Compare and contrast Web 1.0, 2.0, 3.0 with example.",
            "cleanText": "Compare and contrast Web 1.0, 2.0, 3.0 with example.",
            "marks": 10,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 11
      },
      {
        "number": 5,
        "title": "UNIT 5 - Computer Networks and Cloud Computing",
        "questions5": [
          {
            "id": "mis-u5-5m-1",
            "number": 1,
            "text": "Define topology and its types with advantages and disadvantages.",
            "cleanText": "Define topology and its types with advantages and disadvantages.",
            "marks": 5,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "mis-u5-10m-1",
            "number": 1,
            "text": "What is Cloud Computing? Explain its models?",
            "cleanText": "What is Cloud Computing? Explain its models?",
            "marks": 10,
            "years": [
              "May 2025",
              "Dec 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u5-10m-2",
            "number": 2,
            "text": "What do you mean by CAAS, SAAS, IASS? Give the application of each of these.",
            "cleanText": "What do you mean by CAAS, SAAS, IASS? Give the application of each of these.",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u5-10m-3",
            "number": 3,
            "text": "Analyze the key benefits of cloud computing.",
            "cleanText": "Analyze the key benefits of cloud computing.",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 4
      },
      {
        "number": 6,
        "title": "UNIT 6 - Information Systems within Organizations & System Development",
        "questions5": [
          {
            "id": "mis-u6-5m-1",
            "number": 1,
            "text": "What are the features of Executive Support System?",
            "cleanText": "What are the features of Executive Support System?",
            "marks": 5,
            "years": [
              "May 2025",
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u6-5m-2",
            "number": 2,
            "text": "Give an Overview of System Development?",
            "cleanText": "Give an Overview of System Development?",
            "marks": 5,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u6-5m-3",
            "number": 3,
            "text": "Describe the tools that augment the traditional SDLC.",
            "cleanText": "Describe the tools that augment the traditional SDLC.",
            "marks": 5,
            "years": [
              "May 2025",
              "Dec 2024"
            ],
            "hasDiagram": false
          }
        ],
        "questions10": [
          {
            "id": "mis-u6-10m-1",
            "number": 1,
            "text": "List down the types of support provided by Accounting IS, finance IS, production/operations management (POM) IS, marketing IS, and human resources IS.",
            "cleanText": "List down the types of support provided by Accounting IS, finance IS, production/operations management (POM) IS, marketing IS, and human resources IS.",
            "marks": 10,
            "years": [
              "May 2025",
              "Dec 2024",
              "Dec 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u6-10m-2",
            "number": 2,
            "text": "What do you mean by office automation system.",
            "cleanText": "What do you mean by office automation system.",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u6-10m-3",
            "number": 3,
            "text": "What is Decision Support System. Explain the application of DSS.",
            "cleanText": "What is Decision Support System. Explain the application of DSS.",
            "marks": 10,
            "years": [
              "May 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u6-10m-4",
            "number": 4,
            "text": "Identify advantages and drawbacks of businesses implementation which uses an enterprise resource planning system.",
            "cleanText": "Identify advantages and drawbacks of businesses implementation which uses an enterprise resource planning system.",
            "marks": 10,
            "years": [
              "May 2024"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u6-10m-5",
            "number": 5,
            "text": "What are the functional areas of information system?",
            "cleanText": "What are the functional areas of information system?",
            "marks": 10,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          },
          {
            "id": "mis-u6-10m-6",
            "number": 6,
            "text": "Explain the various phases of SDLC models.",
            "cleanText": "Explain the various phases of SDLC models.",
            "marks": 10,
            "years": [
              "Dec 2025"
            ],
            "hasDiagram": false
          }
        ],
        "totalQuestions": 9
      }
    ],
    "total5M": 17,
    "total10M": 34,
    "totalQuestions": 51
  }
];

export function getAllSubjects(): Subject[] {
  return subjects;
}

export function getSubjectBySlug(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug.toLowerCase());
}
