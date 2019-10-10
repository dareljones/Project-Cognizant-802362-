package com.example.PaymentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class PaymentResource

{

    @Autowired
    PaymentService paymentService;

    @RequestMapping(method= RequestMethod.POST,value="/user/payments")
    public void addTraining(@RequestBody Payment t) {
        paymentService.addPayment(t);
    }

    @RequestMapping("/payments")
    public List<Payment> getTrainings(){
        return paymentService.getPayments();
    }

    @RequestMapping("/payments/{id}")
    public Payment getTrainings(@PathVariable Long id){
        return paymentService.getPayments(id);
    }

    @RequestMapping("/userPayments/{userId}/{status}")
    public List<Payment> getUserTrainings(@PathVariable Long userId,@PathVariable String status){
        return paymentService.getUserPayments(userId,status);
    }

    @RequestMapping("mentorPayments/{mentorId}/{status}")
    public List<Payment> getMentorTrainings(@PathVariable Long mentorId,@PathVariable String status){
        return paymentService.getMentorPayments(mentorId,status);
    }

    @RequestMapping(method=RequestMethod.PUT,value="/user/payments/{id}")
    public void updateTopic(@RequestBody Payment p, @PathVariable Long id){
        paymentService.updatePayment(p, id);
    }

    @RequestMapping(method=RequestMethod.DELETE,value="/user/payments/{id}")
    public void deleteTraining(@PathVariable Long id){
        paymentService.deletePayment(id);
    }


}
