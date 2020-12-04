export default function handler(req, res) {
    
    const neededKeys = ['action', 'email', 'plan_id', 'uuid', 'activation_email', 'invoice_item_uuid']
    const validate = neededKeys.every(key => Object.keys(req.body).includes(key))
   
    if (req.method === 'POST') {
        if (req.body) {
            if (validate) { 
                const { action, email, plan_id, uuid, activation_email, invoice_item_uuid } = req.body

                // Product activation
                req.setHeader('Authorization: Bearer token')
                res.status(201).json({
                    "message": "product activated",
                    "redirect_url": "https://<site>/login?a=61yvd1f&source=appsumo",
                    "is_new_user": "false"
                })

                /* // Enhance Tier
                const { action, email, plan_id, uuid, activation_email, invoice_item_uuid } = req.body
                req.setHeader('Authorization: Bearer <token>')
                res.status(200).json({
                    "message": "product enhanced"
                })

                // Reduce tier
                const { action, email, plan_id, uuid, activation_email, invoice_item_uuid } = req.body
                req.setHeader('Authorization: Bearer <token>')
                res.status(200).json({
                    "message": "product reduced"
                })

                // Refund
                const { action, email, plan_id, uuid, activation_email, invoice_item_uuid } = req.body
                req.setHeader('Authorization: Bearer <token>')
                res.status(200).json({
                    "message": "product refunded"
                })

                // Update
                const { action, email, plan_id, uuid, activation_email, invoice_item_uuid } = req.body
                req.setHeader('Authorization: Bearer <token>')
                res.status(200).json({
                    "message": "product updated"
                }) */
            }
            else res.status(400).json({ msg: 'To access this API you need a valid body' })
        } 
        else res.status(400).end(JSON.stringify({ msg: 'The body can not be empty' }))
    }
    else res.status(401).end(JSON.stringify({ msg: 'The method to be used must be a POST' }))
}