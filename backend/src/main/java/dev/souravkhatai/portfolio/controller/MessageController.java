package dev.souravkhatai.portfolio.controller;

import dev.souravkhatai.portfolio.model.ContactMessage;
import dev.souravkhatai.portfolio.service.MessageService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/contact")
@RequiredArgsConstructor
public class MessageController {

    private final MessageService messageService;

    @PostMapping
    public ResponseEntity<Map<String, Object>> handleContactSubmission(@Valid @RequestBody ContactMessage message) {
        ContactMessage saved = messageService.saveMessage(message);

        Map<String, Object> response = new HashMap<>();
        response.put("status", "created");
        response.put("statusCode", 201);
        response.put("message", "HTTP 201: Message payload received. Message queued into transactional mailbox system.");
        response.put("timestamp", saved.getTimestamp());

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
