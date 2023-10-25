import { http, HttpResponse } from 'msw'

export const handlers = [
  http.post('/api/login', async ({ request }) => {
    const body = await request.json()

    return HttpResponse.json({
      userId: 1,
      name: body.name,
      token: 'fsafsefaefaewf',
      picture: null,
      isAdmin: false
    })
  })
]
