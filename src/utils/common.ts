import { CurrentWeatherResponse, ThreeHourResponse } from 'types'

export const LIST_DATA: ThreeHourResponse = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1712394000,
      main: {
        temp: 306.13,
        feels_like: 312.26,
        temp_min: 303.76,
        temp_max: 306.13,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1001,
        humidity: 59,
        temp_kf: 2.37
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: { all: 40 },
      wind: { speed: 2.58, deg: 101, gust: 3.38 },
      visibility: 10000,
      pop: 0.32,
      rain: { '3h': 0.31 },
      sys: { pod: 'd' },
      dt_txt: '2024-04-06 09:00:00'
    },
    {
      dt: 1712404800,
      main: {
        temp: 304.75,
        feels_like: 310.78,
        temp_min: 301.99,
        temp_max: 304.75,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1002,
        humidity: 65,
        temp_kf: 2.76
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: { all: 44 },
      wind: { speed: 4.42, deg: 55, gust: 5.62 },
      visibility: 10000,
      pop: 0.27,
      rain: { '3h': 0.13 },
      sys: { pod: 'n' },
      dt_txt: '2024-04-06 12:00:00'
    },
    {
      dt: 1712415600,
      main: {
        temp: 302.62,
        feels_like: 307.58,
        temp_min: 300.86,
        temp_max: 302.62,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1004,
        humidity: 73,
        temp_kf: 1.76
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: { all: 77 },
      wind: { speed: 3.92, deg: 47, gust: 5.63 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2024-04-06 15:00:00'
    },
    {
      dt: 1712426400,
      main: {
        temp: 300.06,
        feels_like: 303.05,
        temp_min: 300.06,
        temp_max: 300.06,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1002,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: { all: 97 },
      wind: { speed: 3.32, deg: 20, gust: 4.36 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2024-04-06 18:00:00'
    },
    {
      dt: 1712437200,
      main: {
        temp: 299.69,
        feels_like: 299.69,
        temp_min: 299.69,
        temp_max: 299.69,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1002,
        humidity: 86,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: { all: 84 },
      wind: { speed: 2.76, deg: 35, gust: 3.4 },
      visibility: 10000,
      pop: 0.14,
      sys: { pod: 'n' },
      dt_txt: '2024-04-06 21:00:00'
    },
    {
      dt: 1712448000,
      main: {
        temp: 300.18,
        feels_like: 303.45,
        temp_min: 300.18,
        temp_max: 300.18,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1004,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: { all: 88 },
      wind: { speed: 2.59, deg: 29, gust: 3.37 },
      visibility: 10000,
      pop: 0.24,
      sys: { pod: 'd' },
      dt_txt: '2024-04-07 00:00:00'
    },
    {
      dt: 1712458800,
      main: {
        temp: 303.58,
        feels_like: 308.23,
        temp_min: 303.58,
        temp_max: 303.58,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1004,
        humidity: 66,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      clouds: { all: 54 },
      wind: { speed: 2.82, deg: 43, gust: 3.63 },
      visibility: 10000,
      pop: 0.28,
      sys: { pod: 'd' },
      dt_txt: '2024-04-07 03:00:00'
    },
    {
      dt: 1712469600,
      main: {
        temp: 303.92,
        feels_like: 308.76,
        temp_min: 303.92,
        temp_max: 303.92,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1002,
        humidity: 65,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: { all: 70 },
      wind: { speed: 2.64, deg: 89, gust: 3.02 },
      visibility: 10000,
      pop: 0.43,
      rain: { '3h': 0.53 },
      sys: { pod: 'd' },
      dt_txt: '2024-04-07 06:00:00'
    },
    {
      dt: 1712480400,
      main: {
        temp: 303.46,
        feels_like: 308.2,
        temp_min: 303.46,
        temp_max: 303.46,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1000,
        humidity: 67,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: { all: 89 },
      wind: { speed: 1.97, deg: 67, gust: 3.44 },
      visibility: 10000,
      pop: 0.47,
      rain: { '3h': 0.95 },
      sys: { pod: 'd' },
      dt_txt: '2024-04-07 09:00:00'
    },
    {
      dt: 1712491200,
      main: {
        temp: 301.91,
        feels_like: 306.45,
        temp_min: 301.91,
        temp_max: 301.91,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1002,
        humidity: 76,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: { all: 72 },
      wind: { speed: 4.13, deg: 41, gust: 5.46 },
      visibility: 10000,
      pop: 0.39,
      rain: { '3h': 0.29 },
      sys: { pod: 'n' },
      dt_txt: '2024-04-07 12:00:00'
    },
    {
      dt: 1712502000,
      main: {
        temp: 300.69,
        feels_like: 304,
        temp_min: 300.69,
        temp_max: 300.69,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1004,
        humidity: 79,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: { all: 99 },
      wind: { speed: 3.27, deg: 39, gust: 4.4 },
      visibility: 10000,
      pop: 0.01,
      sys: { pod: 'n' },
      dt_txt: '2024-04-07 15:00:00'
    },
    {
      dt: 1712512800,
      main: {
        temp: 300.07,
        feels_like: 302.8,
        temp_min: 300.07,
        temp_max: 300.07,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1003,
        humidity: 81,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: { all: 98 },
      wind: { speed: 1.98, deg: 31, gust: 2.26 },
      visibility: 10000,
      pop: 0.18,
      sys: { pod: 'n' },
      dt_txt: '2024-04-07 18:00:00'
    },
    {
      dt: 1712523600,
      main: {
        temp: 299.72,
        feels_like: 299.72,
        temp_min: 299.72,
        temp_max: 299.72,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1002,
        humidity: 83,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: { all: 100 },
      wind: { speed: 1.38, deg: 26, gust: 1.43 },
      visibility: 10000,
      pop: 0.44,
      sys: { pod: 'n' },
      dt_txt: '2024-04-07 21:00:00'
    },
    {
      dt: 1712534400,
      main: {
        temp: 300.05,
        feels_like: 302.85,
        temp_min: 300.05,
        temp_max: 300.05,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1004,
        humidity: 82,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: { all: 94 },
      wind: { speed: 1.04, deg: 19, gust: 1.14 },
      visibility: 10000,
      pop: 0.77,
      rain: { '3h': 0.34 },
      sys: { pod: 'd' },
      dt_txt: '2024-04-08 00:00:00'
    },
    {
      dt: 1712545200,
      main: {
        temp: 302.8,
        feels_like: 306.29,
        temp_min: 302.8,
        temp_max: 302.8,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1006,
        humidity: 65,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d'
        }
      ],
      clouds: { all: 41 },
      wind: { speed: 1.29, deg: 208, gust: 1.45 },
      visibility: 10000,
      pop: 1,
      rain: { '3h': 3.25 },
      sys: { pod: 'd' },
      dt_txt: '2024-04-08 03:00:00'
    },
    {
      dt: 1712556000,
      main: {
        temp: 302.28,
        feels_like: 306.16,
        temp_min: 302.28,
        temp_max: 302.28,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1004,
        humidity: 70,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d'
        }
      ],
      clouds: { all: 59 },
      wind: { speed: 3.07, deg: 220, gust: 2.83 },
      visibility: 9132,
      pop: 1,
      rain: { '3h': 3.83 },
      sys: { pod: 'd' },
      dt_txt: '2024-04-08 06:00:00'
    },
    {
      dt: 1712566800,
      main: {
        temp: 302.12,
        feels_like: 306,
        temp_min: 302.12,
        temp_max: 302.12,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1003,
        humidity: 71,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: { all: 90 },
      wind: { speed: 2.22, deg: 271, gust: 2.47 },
      visibility: 10000,
      pop: 0.89,
      rain: { '3h': 2.25 },
      sys: { pod: 'd' },
      dt_txt: '2024-04-08 09:00:00'
    },
    {
      dt: 1712577600,
      main: {
        temp: 300.87,
        feels_like: 304.29,
        temp_min: 300.87,
        temp_max: 300.87,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1004,
        humidity: 78,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: { all: 94 },
      wind: { speed: 2.73, deg: 308, gust: 3.29 },
      visibility: 10000,
      pop: 0.8,
      rain: { '3h': 0.23 },
      sys: { pod: 'n' },
      dt_txt: '2024-04-08 12:00:00'
    },
    {
      dt: 1712588400,
      main: {
        temp: 300,
        feels_like: 302.56,
        temp_min: 300,
        temp_max: 300,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1005,
        humidity: 80,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: { all: 89 },
      wind: { speed: 3.48, deg: 314, gust: 4.3 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2024-04-08 15:00:00'
    },
    {
      dt: 1712599200,
      main: {
        temp: 299.26,
        feels_like: 299.26,
        temp_min: 299.26,
        temp_max: 299.26,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1004,
        humidity: 81,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: { all: 89 },
      wind: { speed: 3.69, deg: 303, gust: 5.87 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2024-04-08 18:00:00'
    },
    {
      dt: 1712610000,
      main: {
        temp: 298.97,
        feels_like: 299.8,
        temp_min: 298.97,
        temp_max: 298.97,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1003,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: { all: 85 },
      wind: { speed: 3.62, deg: 302, gust: 5.48 },
      visibility: 10000,
      pop: 0.08,
      sys: { pod: 'n' },
      dt_txt: '2024-04-08 21:00:00'
    },
    {
      dt: 1712620800,
      main: {
        temp: 299.2,
        feels_like: 299.2,
        temp_min: 299.2,
        temp_max: 299.2,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1004,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      clouds: { all: 80 },
      wind: { speed: 3.49, deg: 312, gust: 5.63 },
      visibility: 10000,
      pop: 0.11,
      sys: { pod: 'd' },
      dt_txt: '2024-04-09 00:00:00'
    },
    {
      dt: 1712631600,
      main: {
        temp: 302.73,
        feels_like: 307.41,
        temp_min: 302.73,
        temp_max: 302.73,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1005,
        humidity: 71,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: { all: 95 },
      wind: { speed: 4.03, deg: 292, gust: 4.59 },
      visibility: 10000,
      pop: 0.34,
      rain: { '3h': 0.14 },
      sys: { pod: 'd' },
      dt_txt: '2024-04-09 03:00:00'
    },
    {
      dt: 1712642400,
      main: {
        temp: 303.53,
        feels_like: 308.36,
        temp_min: 303.53,
        temp_max: 303.53,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1003,
        humidity: 67,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d'
        }
      ],
      clouds: { all: 96 },
      wind: { speed: 4, deg: 266, gust: 4.09 },
      visibility: 10000,
      pop: 0.52,
      rain: { '3h': 3.22 },
      sys: { pod: 'd' },
      dt_txt: '2024-04-09 06:00:00'
    },
    {
      dt: 1712653200,
      main: {
        temp: 301.86,
        feels_like: 305.96,
        temp_min: 301.86,
        temp_max: 301.86,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1002,
        humidity: 74,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d'
        }
      ],
      clouds: { all: 97 },
      wind: { speed: 0.82, deg: 336, gust: 2.4 },
      visibility: 10000,
      pop: 0.89,
      rain: { '3h': 6.66 },
      sys: { pod: 'd' },
      dt_txt: '2024-04-09 09:00:00'
    },
    {
      dt: 1712664000,
      main: {
        temp: 301.26,
        feels_like: 304.9,
        temp_min: 301.26,
        temp_max: 301.26,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1004,
        humidity: 76,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: { all: 98 },
      wind: { speed: 1.61, deg: 64, gust: 2.6 },
      visibility: 10000,
      pop: 0.91,
      rain: { '3h': 0.62 },
      sys: { pod: 'n' },
      dt_txt: '2024-04-09 12:00:00'
    },
    {
      dt: 1712674800,
      main: {
        temp: 300.19,
        feels_like: 303.17,
        temp_min: 300.19,
        temp_max: 300.19,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1006,
        humidity: 82,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: { all: 98 },
      wind: { speed: 4.26, deg: 19, gust: 6.43 },
      visibility: 10000,
      pop: 0.56,
      sys: { pod: 'n' },
      dt_txt: '2024-04-09 15:00:00'
    },
    {
      dt: 1712685600,
      main: {
        temp: 299.69,
        feels_like: 299.69,
        temp_min: 299.69,
        temp_max: 299.69,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1004,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: { all: 99 },
      wind: { speed: 3.62, deg: 13, gust: 6.49 },
      visibility: 10000,
      pop: 0.57,
      rain: { '3h': 0.13 },
      sys: { pod: 'n' },
      dt_txt: '2024-04-09 18:00:00'
    },
    {
      dt: 1712696400,
      main: {
        temp: 299.18,
        feels_like: 299.18,
        temp_min: 299.18,
        temp_max: 299.18,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1004,
        humidity: 87,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: { all: 100 },
      wind: { speed: 3.61, deg: 6, gust: 5.81 },
      visibility: 10000,
      pop: 0.7,
      rain: { '3h': 0.74 },
      sys: { pod: 'n' },
      dt_txt: '2024-04-09 21:00:00'
    },
    {
      dt: 1712707200,
      main: {
        temp: 299.68,
        feels_like: 299.68,
        temp_min: 299.68,
        temp_max: 299.68,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1005,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: { all: 98 },
      wind: { speed: 3.33, deg: 4, gust: 5.45 },
      visibility: 10000,
      pop: 0.72,
      rain: { '3h': 0.18 },
      sys: { pod: 'd' },
      dt_txt: '2024-04-10 00:00:00'
    },
    {
      dt: 1712718000,
      main: {
        temp: 302.26,
        feels_like: 306.51,
        temp_min: 302.26,
        temp_max: 302.26,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1006,
        humidity: 72,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: { all: 98 },
      wind: { speed: 3.13, deg: 1, gust: 3.94 },
      visibility: 10000,
      pop: 0.92,
      rain: { '3h': 2.97 },
      sys: { pod: 'd' },
      dt_txt: '2024-04-10 03:00:00'
    },
    {
      dt: 1712728800,
      main: {
        temp: 302.21,
        feels_like: 306.01,
        temp_min: 302.21,
        temp_max: 302.21,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1004,
        humidity: 70,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d'
        }
      ],
      clouds: { all: 99 },
      wind: { speed: 1.16, deg: 309, gust: 1.72 },
      visibility: 10000,
      pop: 1,
      rain: { '3h': 6.07 },
      sys: { pod: 'd' },
      dt_txt: '2024-04-10 06:00:00'
    },
    {
      dt: 1712739600,
      main: {
        temp: 299.04,
        feels_like: 299.98,
        temp_min: 299.04,
        temp_max: 299.04,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1003,
        humidity: 88,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d'
        }
      ],
      clouds: { all: 100 },
      wind: { speed: 1.1, deg: 279, gust: 2.39 },
      visibility: 10000,
      pop: 0.86,
      rain: { '3h': 6.83 },
      sys: { pod: 'd' },
      dt_txt: '2024-04-10 09:00:00'
    },
    {
      dt: 1712750400,
      main: {
        temp: 298.91,
        feels_like: 299.81,
        temp_min: 298.91,
        temp_max: 298.91,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1005,
        humidity: 87,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10n'
        }
      ],
      clouds: { all: 100 },
      wind: { speed: 1.48, deg: 282, gust: 1.8 },
      visibility: 10000,
      pop: 0.94,
      rain: { '3h': 3.98 },
      sys: { pod: 'n' },
      dt_txt: '2024-04-10 12:00:00'
    },
    {
      dt: 1712761200,
      main: {
        temp: 298.99,
        feels_like: 299.9,
        temp_min: 298.99,
        temp_max: 298.99,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1006,
        humidity: 87,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: { all: 100 },
      wind: { speed: 1.36, deg: 315, gust: 1.77 },
      visibility: 10000,
      pop: 0.81,
      rain: { '3h': 1.53 },
      sys: { pod: 'n' },
      dt_txt: '2024-04-10 15:00:00'
    },
    {
      dt: 1712772000,
      main: {
        temp: 298.94,
        feels_like: 299.82,
        temp_min: 298.94,
        temp_max: 298.94,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1005,
        humidity: 86,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: { all: 100 },
      wind: { speed: 1.97, deg: 342, gust: 2.01 },
      visibility: 10000,
      pop: 0.74,
      rain: { '3h': 0.25 },
      sys: { pod: 'n' },
      dt_txt: '2024-04-10 18:00:00'
    },
    {
      dt: 1712782800,
      main: {
        temp: 298.81,
        feels_like: 299.7,
        temp_min: 298.81,
        temp_max: 298.81,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1004,
        humidity: 87,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: { all: 99 },
      wind: { speed: 2.54, deg: 358, gust: 2.82 },
      visibility: 10000,
      pop: 0.56,
      rain: { '3h': 0.71 },
      sys: { pod: 'n' },
      dt_txt: '2024-04-10 21:00:00'
    },
    {
      dt: 1712793600,
      main: {
        temp: 298.95,
        feels_like: 299.81,
        temp_min: 298.95,
        temp_max: 298.95,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1006,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d'
        }
      ],
      clouds: { all: 99 },
      wind: { speed: 1.36, deg: 348, gust: 1.42 },
      visibility: 5897,
      pop: 0.94,
      rain: { '3h': 5.09 },
      sys: { pod: 'd' },
      dt_txt: '2024-04-11 00:00:00'
    },
    {
      dt: 1712804400,
      main: {
        temp: 301.06,
        feels_like: 304.04,
        temp_min: 301.06,
        temp_max: 301.06,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1007,
        humidity: 73,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d'
        }
      ],
      clouds: { all: 100 },
      wind: { speed: 1.13, deg: 341, gust: 1.52 },
      visibility: 5231,
      pop: 1,
      rain: { '3h': 5.4 },
      sys: { pod: 'd' },
      dt_txt: '2024-04-11 03:00:00'
    },
    {
      dt: 1712815200,
      main: {
        temp: 301.16,
        feels_like: 304.39,
        temp_min: 301.16,
        temp_max: 301.16,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1005,
        humidity: 74,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d'
        }
      ],
      clouds: { all: 100 },
      wind: { speed: 1.94, deg: 359, gust: 2.46 },
      visibility: 6390,
      pop: 1,
      rain: { '3h': 5.96 },
      sys: { pod: 'd' },
      dt_txt: '2024-04-11 06:00:00'
    }
  ],
  city: {
    id: 1880251,
    name: 'Singapore',
    coord: { lat: 1.3667, lon: 103.8 },
    country: 'SG',
    population: 0,
    timezone: 28800,
    sunrise: 1712358182,
    sunset: 1712401858
  }
}

export const DATA: CurrentWeatherResponse = {
  coord: { lon: 106.6664, lat: 10.761 },
  weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' }],
  base: 'stations',
  main: { temp: 28.9, feels_like: 33.65, temp_min: 28.9, temp_max: 28.98, pressure: 1009, humidity: 76 },
  visibility: 10000,
  wind: { speed: 4.12, deg: 130 },
  clouds: { all: 20 },
  dt: 1712413846,
  sys: { type: 2, id: 2093009, country: 'VN', sunrise: 1712357230, sunset: 1712401434 },
  timezone: 25200,
  id: 1566083,
  name: 'Ho Chi Minh City',
  cod: 200
}
