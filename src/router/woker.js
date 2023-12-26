addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    try {
 
      const formData = await request.json()
  
 
      console.log('Form data received:', formData)
  
    
      return new Response('Form submitted successfully!', { status: 200 })
    } catch (error) {
      console.error('Error processing form submission:', error)
  
 
      return new Response('Error processing form submission', { status: 500 })
    }
  }
  